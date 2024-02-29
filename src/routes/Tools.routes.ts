import { Router } from "express";
import { ListToolsController } from "../tools/useCases/listTools/ListToolsController";
import { CreateToolsController } from "../tools/useCases/createTools/CreateToolsController";


export const toolsRouter = Router()

const listToolsController = new ListToolsController()
const createToolsController = new CreateToolsController()

toolsRouter.get("/", listToolsController.handle)
toolsRouter.post("/", createToolsController.handle)