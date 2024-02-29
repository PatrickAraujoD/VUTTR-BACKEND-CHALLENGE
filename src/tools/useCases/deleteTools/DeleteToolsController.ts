import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteToolsUseCase } from './DeleteToolsUseCase'

class DeleteToolsController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        const deleteToolsUseCase = container.resolve(DeleteToolsUseCase)

        await deleteToolsUseCase.execute(Number(id))

        return response.status(200).json({})
    }
}

export { DeleteToolsController }