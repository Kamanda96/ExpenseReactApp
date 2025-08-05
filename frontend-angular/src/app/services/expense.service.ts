import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../components/expense-list/expense-list.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesSubject = new BehaviorSubject<Expense[]>([
    { id: 1, description: 'Groceries', amount: 85.50, category: 'Food' },
    { id: 2, description: 'Gas', amount: 45.00, category: 'Transportation' },
    { id: 3, description: 'Coffee', amount: 12.75, category: 'Food' }
  ]);

  public expenses$ = this.expensesSubject.asObservable();

  constructor() { }

  getExpenses(): Observable<Expense[]> {
    return this.expenses$;
  }

  addExpense(expense: Omit<Expense, 'id'>): void {
    const currentExpenses = this.expensesSubject.value;
    const newId = Math.max(...currentExpenses.map(e => e.id), 0) + 1;
    const newExpense: Expense = { ...expense, id: newId };
    this.expensesSubject.next([...currentExpenses, newExpense]);
  }

  deleteExpense(id: number): void {
    const currentExpenses = this.expensesSubject.value;
    const updatedExpenses = currentExpenses.filter(expense => expense.id !== id);
    this.expensesSubject.next(updatedExpenses);
  }

  updateExpense(updatedExpense: Expense): void {
    const currentExpenses = this.expensesSubject.value;
    const updatedExpenses = currentExpenses.map(expense => 
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    this.expensesSubject.next(updatedExpenses);
  }

  getTotalAmount(): Observable<number> {
    return new Observable(observer => {
      this.expenses$.subscribe(expenses => {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        observer.next(total);
      });
    });
  }
}