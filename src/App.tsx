import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MyForm from "./Components/MyForm";
import MyTable from "./Components/MyTable";
import { type ExpenseType } from "./helper/types";

function App() {
  const [expenseList, setExpenseList] = useState<ExpenseType[]>(() => {
    const stored = localStorage.getItem("expenseList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [expenseList]);

  const [editingValues, setEditingValues] = useState<ExpenseType | undefined>();
  return (
    <div className="container">
      <main>
        <Header />
        <MyForm
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          editingValues={editingValues}
          setEditingValues={setEditingValues}
        />
        <MyTable setExpenseList={setExpenseList} expenseList={expenseList} setEditingValues={setEditingValues} />
      </main>
    </div>
  );
}

export default App;
