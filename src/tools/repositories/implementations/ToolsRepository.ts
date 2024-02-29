import { Tools } from "@prisma/client";
import { IToolsRepository } from "../IToolsRepository";
import { prisma } from "../../../lib/prisma";
import { IToolsDTO } from "../../dtos/IToolsDTO";
import { toolsRouter } from "../../../routes/Tools.routes";

interface IToolsProps {
    id: number,
    title: string,
    description: string,
    link: string,
    tags: string[]
}
class ToolsRepository implements IToolsRepository{
    async getAll(): Promise<Tools[]> {
        const tools = await prisma.tools.findMany({
            include: {
                tags: {
                    select: {
                        title: true
                    }
                }
            }
        })

        const processTools = tools.map((tool) => {
            const tags = tool.tags.map((tag) => {
                return tag.title
            })

            const toolsProp: IToolsProps = {
                id: tool.id,
                title: tool.title,
                link: tool.link,
                description: tool.description,
                tags: tags   
            }

            return toolsProp
        })

        return processTools
    }

    async getToolsByTag(tag: string): Promise<Tools[]> {
        console.log(tag)
        const tools = await prisma.tools.findMany({
            include: {
                tags: {
                    select: {
                        title: true
                    }
                }
            },
            where: {
                tags : {
                    some: {
                        title: tag
                    }
                }
            }
        })

        const processTools = tools.map(tool => {
            const tags = tool.tags.map(tag => {
                return tag.title
            })

            const toolsProp: IToolsProps  = {
                id: tool.id,
                title: tool.title,
                link: tool.link,
                description: tool.description,
                tags: tags
            }

            return toolsProp
        })

        return processTools
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
                tags: {
                    select: {
                        title: true
                    }
                }
            }
        })

        const TitleTags = tool.tags.map((tag) => {
            return tag.title
        })

        const toolProps: IToolsProps = {
            id: tool.id,
            title: tool.title,
            link: tool.link,
            description: tool.description,
            tags: TitleTags
        }

        return toolProps
    }

    async getByTitle(title: string): Promise<Tools | null> {
        const tool = await prisma.tools.findFirst({
            where: {
                title: title
            }
        })

        return tool
    }

}

export { ToolsRepository }