import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MyForm from "./Components/MyForm";
import MyTable from "./Components/MyTable";
import type { ExpenseType } from "./helper/types";

function App() {
  const [expenseList, setExpenseList] = useState<ExpenseType[]>([
    {
      id: "1",
      amount: 45,
      title: "Heelo",
      description: "gdgdf",
      category: "Additional Expenses",
      date: "14-05-2025",
    },
  ]);
  return (
    <div className="container">
      <main>
        <Header />
        <MyForm expenseList={expenseList} setExpenseList={setExpenseList} />
        <MyTable expenseList={expenseList} />
      </main>
    </div>
  );
}

export default App;
