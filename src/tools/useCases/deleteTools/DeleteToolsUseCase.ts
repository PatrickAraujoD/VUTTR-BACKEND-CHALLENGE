import { inject, injectable } from "tsyringe";
import { IToolsRepository } from "../../repositories/IToolsRepository";
import { Tools } from "@prisma/client";

@injectable()
class DeleteToolsUseCase {
    constructor(@inject("ToolsRepository") private toolsRepository: IToolsRepository){}

    async execute(id: number): Promise<void> {
        const tools = await this.toolsRepository.deleteTool(id)
    }
}

export { DeleteToolsUseCase }