import { Router } from "express";
import {
  createNewUser,
  deleteUserByPass,
  getUser,
  getUserByPass,

  getStore,
  createNewStore,
  getStoreById,
  deleteStoreById
} from "../controllers/products.controller.js";

const router = Router();

router.get("/users", getUser);
router.post("/users", createNewUser);
router.get("/users/:pass/:user", getUserByPass);
router.delete("/users/:pass/:user", deleteUserByPass);

router.get("/stores", getStore);
router.post("/stores", createNewStore);
router.get("/stores/:id", getStoreById);
router.delete("/stores/:id", deleteStoreById);



export default router;
