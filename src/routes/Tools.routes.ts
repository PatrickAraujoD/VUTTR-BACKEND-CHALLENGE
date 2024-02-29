import { Router } from "express";
import { ListToolsController } from "../tools/useCases/listTools/ListToolsController";


export const toolsRouter = Router()

const listToolsController = new ListToolsController()

toolsRouter.get("/", listToolsController.handle)
