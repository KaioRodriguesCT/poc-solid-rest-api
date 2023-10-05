import { IRepository } from "../../commom/repository.interface";
import { Project } from "./project.entity";

export class PostgresqlProjectRepository implements IRepository<Project> {
  constructor() {}

  findById(id: number): Promise<Project | null> {
    throw new Error(`Project id: ${id}`);
  }
  save(entity: Project): Promise<Project> {
    throw new Error(`New project: ${JSON.stringify(entity)}`);
  }
  remove(id: number): Promise<void> {
    throw new Error(`Remove ${id}`);
  }
}

export const postgresqlProjectRepository = new PostgresqlProjectRepository();
