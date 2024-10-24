interface ExpenseSummaryProps {
    expenses: Expense[];
  }
  interface Expense {
    id: string;
    amount: number;
    category: string;
    date: string;
    description: string;
  }
  
  const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
    return (
      <div className="mb-4">
        <h2 className="text-xl font-bold">Total Spending: ${total.toFixed(2)}</h2>
      </div>
    );
  };
  
  export default ExpenseSummary;
  