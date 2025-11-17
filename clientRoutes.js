import express from "express";
import multer from "multer";
import { addClient, getClients } from "../controllers/clientController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/add", upload.single("image"), addClient);
router.get("/all", getClients);

export default router;
