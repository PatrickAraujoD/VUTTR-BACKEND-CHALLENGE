import { Request, Response} from 'express'
import { container } from 'tsyringe'
import { CreateToolsUseCase } from './CreateToolsUseCase'

class CreateToolsController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { title, description, tags, link } = request.body
        const createToolsUseCase = container.resolve(CreateToolsUseCase)

        const tools =  await createToolsUseCase.execute({ title, description, tags, link })
        
        return response.status(201).json(tools)
    }
}

export { CreateToolsController }