import { beforeAll, describe, expect, it, vi, vitest } from "vitest";
import {
  CreateProject,
  ICreateProjectRequest,
} from "./create-project.use-case";

import { uuid } from "uuidv4";
import { Project } from "../../project.entity";
import { IRepository } from "../../../../commom/repository.interface";

describe("create-project.use-case", () => {
  const repository: IRepository<Project> = {
    findById: vi.fn(),
    remove: vi.fn(),
    save: vi.fn(),
  };

  beforeAll(() => {});

  it("Should receive a request and return the created project", async () => {
    const dto: ICreateProjectRequest = {
      dtEnd: new Date(),
      dtStart: new Date(),
      name: "Projec test",
    };

    vitest.mock("uuidv4", () => ({
      uuid: vitest.fn(() => "12345"),
    }));

    const id = uuid();

    const createdEntity: Project = new Project({
      dtEnd: dto.dtEnd,
      dtStart: dto.dtStart,
      name: dto.name,
    });

    const sut = new CreateProject(repository);
    vitest.spyOn(repository, "save").mockResolvedValue(createdEntity);

    const result = await sut.execute(dto);
    expect(result).not.toBeNull();
    expect(repository.save).toHaveBeenCalledWith({
      props: dto,
      _id: id,
    });
  });
});
