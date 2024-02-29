import { Tools } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IToolsRepository } from "../../repositories/IToolsRepository";

@injectable()
class ListByTagUseCase {
    constructor(@inject("ToolsRepository") private toolsRepository: IToolsRepository){}

    async execute(tag: string): Promise<Tools[]>{
        const tools = await this.toolsRepository.getToolsByTag(tag)

        return tools
    }
}

export { ListByTagUseCase }