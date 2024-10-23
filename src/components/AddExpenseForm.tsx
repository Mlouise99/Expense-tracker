import React, { useState } from 'react';

interface AddExpenseFormProps {
  addExpense: (expense: Expense) => void;
}

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !date || !description) {
      alert('Please fill in all fields');
      return;
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      category,
      date,
      description,
    };
    addExpense(newExpense);

    
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow-md">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 rounded mb-2 w-full"
      />
     <div>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

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
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
