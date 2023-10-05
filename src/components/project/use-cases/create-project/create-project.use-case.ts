import { IRepository } from "../../../../commom/repository.interface";
import { IUseCase } from "../../../../commom/use-case.interface";
import { Project } from "../../project.entity";

export interface ICreateProjectRequest {
  name: string;
  dtStart: Date;
  dtEnd: Date;
}
export type ICreateProjectResponse = Project;

export class CreateProject
  implements IUseCase<ICreateProjectRequest, ICreateProjectResponse>
{
  constructor(private repository: IRepository<Project>) {}

  async execute({
    dtEnd,
    dtStart,
    name,
  }: ICreateProjectRequest): Promise<ICreateProjectResponse> {
    const project = new Project({
      dtEnd,
      dtStart,
      name,
    });
    return await this.repository.save(project);
  }
}
