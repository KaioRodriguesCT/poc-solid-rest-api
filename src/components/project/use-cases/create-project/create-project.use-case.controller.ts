import { Request, Response } from "express";
import { IUseCaseController } from "../../../../commom/use-case.controller.interface";
import { IUseCase } from "../../../../commom/use-case.interface";
import {
  ICreateProjectRequest,
  ICreateProjectResponse,
} from "./create-project.use-case";

export class CreateProjectController implements IUseCaseController {
  constructor(
    private readonly createProjectUseCase: IUseCase<
      ICreateProjectRequest,
      ICreateProjectResponse
    >
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      console.log("HEre", this);

      const body = req.body;
      const createdProject = await this.createProjectUseCase.execute(body);
      return res.status(201).json(createdProject);
    } catch (e) {
      return res.status(400).json({
        message: e.message ?? "Unexpected error",
      });
    }
  }
}
