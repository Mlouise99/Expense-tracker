import React, { useState, useEffect } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import EditExpenseForm from './components/EditExpenseForm';

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  // Load expenses from localStorage when the app starts
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense: Expense) => {
    setExpenses([...expenses, newExpense]);
  };

  const updateExpense = (updatedExpense: Expense) => {
    setExpenses(expenses.map(exp => (exp.id === updatedExpense.id ? updatedExpense : exp)));
    setEditingExpense(null); // Close the edit form
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>
      
      {editingExpense ? (
        <EditExpenseForm
          expense={editingExpense}
          updateExpense={updateExpense}
        />
      ) : (
        <AddExpenseForm addExpense={addExpense} />
      )}

      <ExpenseSummary expenses={expenses} />
      <ExpenseList 
        expenses={expenses} 
        deleteExpense={deleteExpense} 
        setEditingExpense={setEditingExpense} 
      />
    </div>
  );
};

export default App;
