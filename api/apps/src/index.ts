import express from "express";
import cors from "cors";

// import router from './functions/users/delete-users'
import { router as createUser } from "./functions/users/create-users.js";
import { router as getAll } from "./functions/users/get-all-users.js";
import { router as deleteUser } from "./functions/users/delete-users.js";
import { router as updateUser } from "./functions/users/update-users.js";

import { router as createSales } from "./functions/sales/create-sales.js";
import { router as getAllSales } from "./functions/sales/get-all-sales.js";
import { router as deleteSales } from "./functions/sales/delete-sales.js";
import { router as updateSales } from "./functions/sales/update-sales.js";

import { router as createExpenses } from "./functions/expenses/create-expenses.js";
import { router as getAllExpenses } from "./functions/expenses/get-all-expenses.js";
import { router as deleteExpenses } from "./functions/expenses/delete-expenses.js";
import { router as updateExpenses } from "./functions/expenses/update-expenses.js";

import { router as createCourses } from "./functions/Courses/create-courses.js";
import { router as getAllCourses } from "./functions/Courses/get-all-courses.js";
import { router as deleteCourses } from "./functions/Courses/delete-courses.js";
import { router as updateCourses } from "./functions/Courses/update-courses.js";

import { router as createFranchise } from "./functions/franchises/create-franchises.js";
import { router as getAllFranchise } from "./functions/franchises/get-all-franchises.js";
import { router as deleteFranchise } from "./functions/franchises/delete-franchises.js";
import { router as updateFranchise } from "./functions/franchises/update-franchises.js";

import { router as getExpensesDay } from "./functions/metrics/metrics-expenses/filter-expenses-day.js";
import { router as getExpensesMonth } from "./functions/metrics/metrics-expenses/filter-expenses-month.js";
import { router as getExpensesYear } from "./functions/metrics/metrics-expenses/filter-expenses-year.js";

import { router as getSalesDay } from "./functions/metrics/metrics-sales/filter-sales-day.js";
import { router as getSalesMonth } from "./functions/metrics/metrics-sales/filter-sales-month.js";
import { router as getSalesYear } from "./functions/metrics/metrics-sales/filter-sales-year.js";

import { router as autenticate } from "./functions/autenticate.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
//Router Collaborator
// app.use(router)
app.use(createUser);
app.use(getAll);
app.use(deleteUser);
app.use(updateUser);

//Router Sales
app.use(createSales);
app.use(getAllSales);
app.use(deleteSales);
app.use(updateSales);

//Router Expenses
app.use(createExpenses);
app.use(getAllExpenses);
app.use(deleteExpenses);
app.use(updateExpenses);

//Router Courses
app.use(createCourses);
app.use(getAllCourses);
app.use(deleteCourses);
app.use(updateCourses);

//Router Franchise
app.use(createFranchise);
app.use(getAllFranchise);
app.use(deleteFranchise);
app.use(updateFranchise);

//Metrics Expenses
app.use(getExpensesDay);
app.use(getExpensesMonth);
app.use(getExpensesYear);

//Metrics Sales
app.use(getSalesDay);
app.use(getSalesMonth);
app.use(getSalesYear);

app.use(autenticate);

// Informando onde o servidor estará rodando
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
