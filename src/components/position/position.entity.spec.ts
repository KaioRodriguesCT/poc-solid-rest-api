import { describe, expect, it } from "vitest";
import { IPositionProps, Position } from "./position.entity";
import { specBaseProject } from "../project/project.entity.spec";
import { addDays } from "date-fns";

export const specBasePosition: IPositionProps = {
  project: specBaseProject,
  dtStart: specBaseProject.dtStart,
  dtEnd: specBaseProject.dtEnd,
};

describe("Position", () => {
  it("Should create a position", () => {
    const position = new Position(specBasePosition);

    expect(position).toHaveProperty("dtStart", specBasePosition.dtStart);
    expect(position).toHaveProperty("dtEnd", specBasePosition.dtEnd);
  });

  it("Should fail on creating position with start date before project start", () => {
    const dtStart = addDays(specBasePosition.project.dtStart, -10);

    expect(() => {
      return new Position({
        ...specBasePosition,
        dtStart,
      });
    }).toThrowError("Position can not start before project start's");
  });

  it("Should fail on creating position with end date after project end", () => {
    const dtEnd = addDays(specBasePosition.project.dtEnd, 10);

    expect(() => {
      return new Position({
        ...specBasePosition,
        dtEnd,
      });
    }).toThrowError("Position can not end after project end's");
  });
});
