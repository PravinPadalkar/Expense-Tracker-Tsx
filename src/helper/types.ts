export interface ExpenseType {
  id: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  amount: number;
}
// export enum category {
//   All = "all",
//   Rent = "rent",
// }
export type Category = "Rent" | "Shopping" | "Food" | "Transport" | "College Fees" | "Additional Expenses";
