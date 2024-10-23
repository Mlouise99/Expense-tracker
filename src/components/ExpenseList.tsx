

interface ExpenseListProps {
    expenses: Expense[];
    deleteExpense: (id: string) => void;
    setEditingExpense: (expense: Expense) => void;
  }
  interface Expense {
    id: string;
    amount: number;
    category: string;
    date: string;
    description: string;
  }
  
  
  const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, deleteExpense, setEditingExpense }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Expense List</h2>
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="border p-2 rounded flex justify-between items-center"
            >
              <div>
                <p>{expense.description}</p>
                <p>${expense.amount} - {expense.category}</p>
                <p>{expense.date}</p>
              </div>
              <div>
                <button
                  onClick={() => setEditingExpense(expense)}
                  className="text-blue-500 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;
  