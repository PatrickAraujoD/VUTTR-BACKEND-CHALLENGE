import { Tools } from "@prisma/client";
import { IToolsRepository } from "../../repositories/IToolsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListToolsUseCase {
    constructor(@inject("ToolsRepository") private toolsRepository: IToolsRepository){}

    async execute(): Promise<Tools[]>{
        const tools = await this.toolsRepository.getAll()

        return tools
    }
}

export { ListToolsUseCase }