import express from "express";
export const router = express.Router();
import { prisma } from "../../lib/prisma.js";
import { hash } from "bcryptjs";
router.post("/users", async (req, res) => {
  try {
    const {
      name,
      phoneNumber,
      email,
      wage,
      sector,
      status,
      createdAt,
      password,
    } = req.body;
    const passwordHash = await hash(password, 6);
    await prisma.collaborator.create({
      data: {
        name,
        phoneNumber,
        email,
        wage,
        sector,
        status,
        createdAt,
        password: passwordHash,
      },
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});
