import type { ExpenseType } from "../helper/types";

type MyFormProp = {
  expenseList: ExpenseType[];
  setExpenseList: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
};
export default function MyForm({ expenseList, setExpenseList }: MyFormProp) {
  return (
    <section className="form-section">
      <h1>Add Expense</h1>
      <form action="#" method="get" className="myForm">
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input required type="text" name="title" id="title" />
        </div>
        <div className="input-group two">
          <label htmlFor="description">Description:</label>
          <input required type="text" name="description" id="description" />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select required name="category" id="category">
            <option hidden value="All">
              Select the Category
            </option>
            <option value="Rent">Rent</option>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="College Fees">College Fees</option>
            <option value="AdditionalExpenses">Additional Expenses</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Date:</label>
          <input required type="date" name="date" id="date" />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount:</label>
          <input required type="number" name="amount" id="amount" />
        </div>
        <div className="input-group button-group">
          <button type="submit" className="submit-btn" name="amount" id="amount">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}
