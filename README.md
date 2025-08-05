# Expense Management Application

This project has been refactored from React to Angular, providing a modern expense tracking application.

## Project Structure

- **frontend-angular/**: Angular application (new)
- **frontend/**: Legacy React application (deprecated)

## Angular Application Features

- **Modern Angular Architecture**: Built with Angular 19.x and TypeScript
- **Component-Based Design**: Modular components for better maintainability
- **Service Layer**: Centralized expense management with RxJS observables
- **Responsive UI**: Bootstrap 5 integration for modern styling
- **Type Safety**: Full TypeScript support with strict type checking

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Running

```bash
cd frontend-angular
npm install --legacy-peer-deps
npm start
```

The application will be available at `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## Application Features

- **Expense List**: View all expenses in a clean table format
- **Category Badges**: Color-coded expense categories
- **Delete Functionality**: Remove expenses with confirmation
- **Total Calculation**: Real-time expense total calculation
- **Responsive Design**: Works on desktop and mobile devices

## Architecture Highlights

- **Angular Services**: Centralized state management with ExpenseService
- **RxJS Integration**: Reactive programming with observables
- **Component Communication**: Parent-child component interaction
- **TypeScript Interfaces**: Strong typing for expense data models
- **Angular Pipes**: Built-in formatting for currency and numbers
