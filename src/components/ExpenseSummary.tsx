interface ExpenseSummaryProps {
    expenses: Expense[];
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
  