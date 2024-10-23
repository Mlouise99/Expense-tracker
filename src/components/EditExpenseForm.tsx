import React, { useState } from 'react';

interface EditExpenseFormProps {
  expense: Expense;
  updateExpense: (expense: Expense) => void;
}

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

const EditExpenseForm: React.FC<EditExpenseFormProps> = ({ expense, updateExpense }) => {
  const [amount, setAmount] = useState(expense.amount.toString());
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);
  const [description, setDescription] = useState(expense.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedExpense: Expense = {
      ...expense,
      amount: parseFloat(amount),
      category,
      date,
      description,
    };
    updateExpense(updatedExpense);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 rounded mb-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded w-full"
      >
        Update Expense
      </button>
    </form>
  );
};

export default EditExpenseForm;
