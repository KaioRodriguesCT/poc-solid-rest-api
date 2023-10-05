import { describe, expect, it } from "vitest";
import { IProjectProps, Project } from "./project.entity";
import { addDays } from "date-fns";

export const specBaseProject: IProjectProps = {
  name: "project test",
  dtEnd: addDays(new Date(), 90),
  dtStart: new Date(),
};

describe("Project", () => {
  it("Should create a project", () => {
    const project = new Project(specBaseProject);

    expect(project).toBeInstanceOf(Project);
    expect(project).toHaveProperty("dtStart", specBaseProject.dtStart);
    expect(project).toHaveProperty("dtEnd", specBaseProject.dtEnd);
  });
});
