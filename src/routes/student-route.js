import { Router } from "express";
import StudentControllers from "../controllers/StudentControllers.js";


const router = new Router();

router.post("/students", StudentControllers.create)
router.get("/students",StudentControllers.getAll)
router.put("/students/:id",StudentControllers.update )

export default router;