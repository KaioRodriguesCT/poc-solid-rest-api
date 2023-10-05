import { beforeAll, describe, expect, it, vi, vitest } from "vitest";
import { IUseCase } from "../../../../commom/use-case.interface";
import {
  ICreateProjectRequest,
  ICreateProjectResponse,
} from "./create-project.use-case";
import { Project } from "../../project.entity";
import { CreateProjectController } from "./create-project.use-case.controller";
import { createRequest, createResponse } from "node-mocks-http";

describe("create-project.controller.use-case", () => {
  const service: IUseCase<ICreateProjectRequest, ICreateProjectResponse> = {
    execute: vi.fn(),
  };

  beforeAll(() => {});

  it("Should receive a request and return created project", async () => {
    const dto: ICreateProjectRequest = {
      dtEnd: new Date(),
      dtStart: new Date(),
      name: "Projec test",
    };

    vitest.mock("uuidv4", () => ({
      uuid: vitest.fn(() => "12345"),
    }));

    const createdProject: Project = new Project({
      dtEnd: dto.dtEnd,
      dtStart: dto.dtStart,
      name: dto.name,
    });

    vitest.spyOn(service, "execute").mockResolvedValue(createdProject);

    const sut = new CreateProjectController(service);
    const response = createResponse();
    const request = createRequest({
      body: dto,
    });

    await sut.handle(request, response);
    const result = JSON.parse(response._getData());

    expect(result).toEqual(
      expect.objectContaining({
        ...createdProject,
        _props: {
          ...createdProject.props,
          dtEnd: createdProject.dtEnd.toISOString(),
          dtStart: createdProject.dtStart.toISOString(),
        },
      })
    );
    expect(service.execute).toHaveBeenCalledWith(dto);
  });
});
