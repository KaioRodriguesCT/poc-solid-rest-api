import { isAfter, isBefore } from "date-fns";
import { IProjectProps } from "../project/project.entity";
import { uuid } from "uuidv4";

export interface IPositionProps {
  dtStart: Date;
  dtEnd: Date;
  project: IProjectProps;
}

export class Position {
  private readonly _id: string;
  constructor(
    private props: IPositionProps,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this._id = uuid();
    }
  }

  get id() {
    return this._id;
  }

  get dtStart() {
    return this.props.dtStart;
  }

  get dtEnd() {
    return this.props.dtEnd;
  }

  get project() {
    return this.props.project;
  }

  set dtStart(dtStart: Date) {
    const projectStart = this.project.dtStart;
    if (isBefore(dtStart, projectStart)) {
      throw new Error("Position can not start before project start's");
    }
    this.props.dtStart = dtStart;
  }

  set dtEnd(dtEnd: Date) {
    const projectEnd = this.project.dtEnd;

    if (isAfter(dtEnd, projectEnd)) {
      throw new Error("Position can not end after project end's");
    }

    this.props.dtEnd = dtEnd;
  }

  set project(project: IProjectProps) {
    this.props.project = project;
  }
}
