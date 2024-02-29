import { Router } from "express";
import { toolsRouter } from "./Tools.routes";

export const router = Router()

router.use("/tools", toolsRouter)