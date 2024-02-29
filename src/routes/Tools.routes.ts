import { Router } from "express";
import { ListToolsController } from "../tools/useCases/listTools/ListToolsController";
import { CreateToolsController } from "../tools/useCases/createTools/CreateToolsController";
import { ListByTagController } from "../tools/useCases/listByTag/ListByTagController";
import { DeleteToolsController } from "../tools/useCases/deleteTools/DeleteToolsController";


export const toolsRouter = Router()

const listToolsController = new ListToolsController()
const createToolsController = new CreateToolsController()
const listToolsByTagController = new ListByTagController()
const deleteToolsController = new DeleteToolsController()

toolsRouter.get("/tag", listToolsByTagController.handle)
toolsRouter.get("/", listToolsController.handle)
toolsRouter.post("/", createToolsController.handle)
toolsRouter.delete("/:id", deleteToolsController.handle)