import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August 15th 2021</div>
      <div className="expense-item__description">
        <h2>Expense Item!</h2>
        <div className="expense-item__price">$297.50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
