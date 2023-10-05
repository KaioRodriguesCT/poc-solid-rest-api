import { postgresqlProjectRepository } from "../../postgresql-project.repository";
import { CreateProject } from "./create-project.use-case";
import { CreateProjectController } from "./create-project.use-case.controller";

const repository = postgresqlProjectRepository;

const createProjectUseCase = new CreateProject(repository);

const createProjectController = new CreateProjectController(
  createProjectUseCase
);

export { createProjectUseCase, createProjectController };
