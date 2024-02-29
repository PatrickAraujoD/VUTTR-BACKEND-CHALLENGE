import { Request, Response } from "express";
import { ListToolsUseCase } from "./ListToolsUseCase";
import { container } from "tsyringe";

class ListToolsController {
    async handle(request: Request, response: Response): Promise<Response>{
        const listToolsUseCase = container.resolve(ListToolsUseCase)
        
        const tools = await listToolsUseCase.execute()

        return response.status(200).json(tools)
    }
}

export { ListToolsController }