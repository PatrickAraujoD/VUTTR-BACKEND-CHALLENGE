import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListByTagUseCase } from './ListByTagUseCase'

class ListByTagController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { tag } = request.query

        const listByTagUseCase = container.resolve(ListByTagUseCase)

        const tools = await listByTagUseCase.execute(String(tag))

        return response.status(200).json(tools)
    }
}

export { ListByTagController }