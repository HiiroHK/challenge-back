import express from "express";
export const router = express.Router();
import { prisma } from "../../lib/prisma.js";

router.get("/expenses", async (req, res) => {
  try {
    const expenses = await prisma.expenses.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(expenses);
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});
