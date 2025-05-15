export interface ExpenseType {
  id: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  amount: number;
}
export enum Category {
  Rent = "Rent",
  Shopping = "Shopping",
  Food = "Food",
  Transport = "Transport",
  CollegeFees = "College Fees",
  AdditionalExpenses = "Additional Expenses",
}
// export type Category = "Rent" | "Shopping" | "Food" | "Transport" | "College Fees" | "Additional Expenses";
