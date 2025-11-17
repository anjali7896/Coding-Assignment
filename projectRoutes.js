import express from "express";
import multer from "multer";
import { addProject, getProjects } from "../controllers/projectController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/add", upload.single("image"), addProject);
router.get("/all", getProjects);

export default router;
