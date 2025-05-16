import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MyForm from "./Components/MyForm";
import MyTable from "./Components/MyTable";
import { Category, type ExpenseType } from "./helper/types";

function App() {
  const [expenseList, setExpenseList] = useState<ExpenseType[]>([
    {
      id: "1",
      amount: 45,
      title: "Heelo",
      description: "gdgdf",
      category: Category.AdditionalExpenses,
      date: "2025-05-16",
    },
  ]);
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
