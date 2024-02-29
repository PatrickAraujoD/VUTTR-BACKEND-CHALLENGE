import { Tools } from "@prisma/client";
import { IToolsRepository } from "../IToolsRepository";
import { prisma } from "../../../lib/prisma";
import { IToolsDTO } from "../../dtos/IToolsDTO";

class ToolsRepository implements IToolsRepository{
    async getAll(): Promise<Tools[]> {
        const tools = await prisma.tools.findMany()

        return tools
    }

    async getToolsByTag(tag: string): Promise<Tools[]> {
        const toolsId = await prisma.tags.findMany({
            select: {
                toolsId: true
            },
            where: {
                title: tag
            }
        })

        const tools = await Promise.all(toolsId.map(async (tool) => {
            const toolId = tool.toolsId
            const toolValue = await prisma.tools.findFirst({
                where: {
                    id: toolId
                }
            })

            return toolValue
        }))

        return tools.filter(tool => tool !== null) as Tools[]
    }

    async createTools({ title, link, description, tags }: IToolsDTO): Promise<Tools> {
        const tool = await prisma.tools.create({
            data: {
                title: title,
                link: link,
                description: description,
                tags: {
                    create: tags.map((title) => ({
                        title: title
                    })),
                },
            },
            include: {
                tags: true,
            }
        })

        return tool
    }

}

export { ToolsRepository }