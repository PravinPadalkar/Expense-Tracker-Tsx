import type React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Category, ExpenseType } from "../helper/types";
import { useEffect } from "react";

type MyFormProp = {
  expenseList: ExpenseType[];
  setExpenseList: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
  editingValues: ExpenseType | undefined;
  setEditingValues: React.Dispatch<React.SetStateAction<ExpenseType | undefined>>;
};
type Inputs = {
  title: string;
  description: string;
  category: Category;
  date: string;
  amount: number;
};
export default function MyForm({ expenseList, setExpenseList, editingValues, setEditingValues }: MyFormProp) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (editingValues) {
      setExpenseList((prev) => {
        return prev.map((item) => {
          if (item.id === editingValues.id) {
            return { ...data, id: editingValues.id };
          }
          return item;
        });
      });
      setEditingValues(undefined);
    } else {
      const newData = { ...data, id: (expenseList.length + 1).toString() };
      setExpenseList((prev) => [...prev, newData]);
    }
    reset({
      title: "",
      description: "",
      category: "" as Category,
      amount: undefined,
      date: "",
    });
    console.log("reset");
  };
  useEffect(() => {
    if (editingValues) {
      reset({
        title: editingValues.title,
        description: editingValues.description,
        category: editingValues.category as Category,
        amount: editingValues.amount,
        date: editingValues.date,
      });
    }
  }, [editingValues]);
  return (
    <section className="form-section">
      <h1>Add Expense</h1>
      <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            {...register("title", {
              required: "Please Enter Title",
              minLength: { value: 5, message: "Title should contain atlest 5 characters" },
            })}
            id="title"
          />
          {errors.title && <span className="error">{errors.title?.message}</span>}
        </div>
        <div className="input-group two">
          <label htmlFor="description">Description:</label>
          <input type="text" {...register("description", { required: "Please Enter Descriprion" })} id="description" />
          {errors.description && <span className="error">{errors.description?.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select {...register("category", { required: "Please Select Category" })} id="category">
            <option hidden value="">
              Select the Category
            </option>
            <option value="Rent">Rent</option>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="College Fees">College Fees</option>
            <option value="Additional Expenses">Additional Expenses</option>
          </select>
          {errors.category && <span className="error">{errors.category?.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="date">Date:</label>
          <input type="date" {...register("date", { required: "Please Enter a date" })} id="date" />
          {errors.date && <span className="error">{errors.date?.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            {...register("amount", { required: "Please Enter a amount", valueAsNumber: true })}
            id="amount"
          />
          {errors.amount && <span className="error">{errors.amount?.message}</span>}
        </div>
        <div className="input-group button-group">
          <button type="submit" className="submit-btn">
            {editingValues ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
}
