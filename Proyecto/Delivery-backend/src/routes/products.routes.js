import { Router } from "express";
import {
  createNewUser,
  deleteUserByPass,
  getUser,
  getUserByPass,
  getUserByid,

  getStore,
  createNewStore,
  getStoreById,
  deleteStoreById,
  
  getClient,
  createNewClient,
  getClientById,
  deleteClientById,
  
  createNewSale,
  getSaleById,
  getShipment_0,
  getOrdernIn,
  UpdateShipments,
  getOrdernInMap,
  getOrderEnd
} from "../controllers/products.controller.js";

const router = Router();

router.get("/users", getUser);
router.post("/users", createNewUser);
router.get("/users/:pass/:user", getUserByPass);
router.delete("/users/:pass/:user", deleteUserByPass);
router.get("/users/:idUser", getUserByid);

router.get("/stores", getStore);
router.post("/stores", createNewStore);
router.get("/stores/:id", getStoreById);
router.delete("/stores/:id", deleteStoreById);

router.get("/clients", getClient);
router.post("/clients", createNewClient);
router.get("/clients/:id", getClientById);
router.delete("/clients/:id", deleteClientById);

router.get("/sales/:codUser", getSaleById);
router.post("/sales", createNewSale);

router.get("/shipments", getShipment_0);

router.get("/orderIn", getOrdernIn);
router.post("/shipments", UpdateShipments);
router.get("/orderIn/map/:idPedido", getOrdernInMap);
router.get("/orderIn/end", getOrderEnd);



export default router;
