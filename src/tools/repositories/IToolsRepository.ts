import { Tools } from "@prisma/client"
import { IToolsDTO } from "../dtos/IToolsDTO"

interface IToolsRepository {
    getAll(): Promise<Tools[]>
    getToolsByTag(tag: string): Promise<Tools[]>
    createTools({title, link, description, tags}: IToolsDTO): Promise<Tools>
    getByTitle(title: string): Promise<Tools | null>
    deleteTool(id: number): Promise<void>
}

export { IToolsRepository }