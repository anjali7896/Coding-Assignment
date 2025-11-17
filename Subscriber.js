import express from "express";
import { addSubscriber, getSubscribers } from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/add", addSubscriber);
router.get("/all", getSubscribers);

export default router;
