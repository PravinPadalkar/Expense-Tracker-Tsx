import React, { useState } from "react";
import type { ExpenseType } from "../helper/types";

type MyTableProps = {
  expenseList: ExpenseType[];
  setExpenseList: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
  setEditingValues: React.Dispatch<React.SetStateAction<ExpenseType | undefined>>;
};
type sortCallBackType = (a: ExpenseType, b: ExpenseType) => number;

const MyTable = ({ expenseList, setExpenseList, setEditingValues }: MyTableProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dateQuery, setDateQuery] = useState<string>("");
  const [categoryQuery, setCategoryQuery] = useState<string>("");
  const [sortCallBack, setSortCallBack] = useState<sortCallBackType>(() => () => 0);
  const handleDelete = (id: string) => {
    setExpenseList((prev) => prev.filter((item) => item.id !== id));
  };
  const handleEdit = ({ id, description, title, date, category, amount }: ExpenseType) => {
    setEditingValues({ id, description, title, date, category, amount });
  };
  const filteredList = [...expenseList]
    .sort(sortCallBack)
    .filter((item) => item.title.toLocaleLowerCase().includes(searchQuery))
    .filter((item) => item.date.includes(dateQuery))
    .filter((item) => item.category.includes(categoryQuery));
  return (
    <section className="table-section">
      <div className="table-header">
        <h2>Expenses List</h2>
        <div className="filter-section">
          <div className="date-filter-container">
            <span>Search By Date:</span>
            <input
              type="date"
              name="filterDate"
              className="filterDate"
              onChange={(e) => setDateQuery(e.target.value)}
            />
          </div>
          <div className="search-container">
            <input
              type="text"
              name="filterDate"
              placeholder="search by title"
              className="searchTitle"
              onChange={(e) => setSearchQuery(e.target.value.toLocaleLowerCase())}
            />
            <i className="fas fa-search fa-xl search-icon"></i>
          </div>
        </div>
      </div>
      <table className="myTable">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>id</th>
            <th style={{ width: "10%" }}>Title</th>
            <th style={{ width: "20%" }}>Description</th>
            <th style={{ width: "10%" }}>
              <div className="sort-section">
                <span>Date (yyyy/mm/dd)</span>
                <div>
                  <i
                    className="fa-solid fa-arrow-up up-sort-icon"
                    onClick={() => {
                      setSortCallBack(() => (a: ExpenseType, b: ExpenseType) => a.date.localeCompare(b.date));
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-arrow-down down-sort-icon"
                    onClick={() =>
                      setSortCallBack(() => (a: ExpenseType, b: ExpenseType) => b.date.localeCompare(a.date))
                    }
                  ></i>
                </div>
              </div>
            </th>
            <th style={{ width: "20%" }}>
              <select
                name="filter"
                id="filter"
                className="filterByCategory"
                onChange={(e) => setCategoryQuery(e.target.value)}
              >
                <option value="">All</option>
                <option value="Rent">Rent</option>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="College Food">College Fees</option>
                <option value="Additional Expenses">Additional Expenses</option>
              </select>
            </th>
            <th style={{ width: "10%" }}>Amount(₹)</th>
            <th style={{ width: "10%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(({ id, title, description, category, amount, date }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>{date}</td>
              <td>{category}</td>
              <td>{amount}</td>
              <td>
                <div className="icons">
                  <i
                    className="fas fa-edit edit-icon"
                    onClick={() => handleEdit({ id, description, title, date, category, amount })}
                  ></i>
                  <i className="fa fa-trash delete-icon " aria-hidden="true" onClick={() => handleDelete(id)}></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={5}>Total</th>
            <th colSpan={2} className="total-field">
              {filteredList.reduce((acc, curr) => acc + curr.amount, 0)}
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
export default MyTable;
