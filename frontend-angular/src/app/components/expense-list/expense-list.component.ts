import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseService } from '../../services/expense.service';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  expenses: Expense[] = [];
  totalAmount: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.expenseService.getExpenses().subscribe(expenses => {
        this.expenses = expenses;
        this.totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id);
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }

  trackByExpenseId(index: number, expense: Expense): number {
    return expense.id;
  }
}