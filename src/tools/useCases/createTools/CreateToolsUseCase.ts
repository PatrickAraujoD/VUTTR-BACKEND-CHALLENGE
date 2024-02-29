import { inject, injectable } from "tsyringe";
import { IToolsDTO } from "../../dtos/IToolsDTO";
import { IToolsRepository } from "../../repositories/IToolsRepository";
import { Tools } from "@prisma/client";

@injectable()
class CreateToolsUseCase {
    constructor(@inject("ToolsRepository") private toolsRepository: IToolsRepository){}
    async execute({title, description, tags, link}: IToolsDTO): Promise<Tools> {
        const toolsExists = await this.toolsRepository.getByTitle(title)

        if(toolsExists) {
            throw new Error("tools already exists")
        }

        const tools = await this.toolsRepository.createTools({
            title,
            link,
            description,
            tags
        })

        return tools
    }
}

export { CreateToolsUseCase }