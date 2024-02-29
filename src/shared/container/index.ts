import "reflect-metadata"
import { container } from "tsyringe";
import { ToolsRepository } from "../../tools/repositories/implementations/ToolsRepository";
import { IToolsRepository } from "../../tools/repositories/IToolsRepository";

container.registerSingleton<IToolsRepository>(
    "ToolsRepository", 
    ToolsRepository
)