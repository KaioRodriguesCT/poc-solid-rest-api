import { uuid } from "uuidv4";

export interface IProjectProps {
  name: string;
  dtStart: Date;
  dtEnd: Date;
}

export class Project {
  private readonly _id: string;
  constructor(
    private _props: IProjectProps,
    id?: string
  ) {
    Object.assign(this, _props);

    if (!id) {
      this._id = uuid();
    }
  }

  get props() {
    return this._props;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._props.name;
  }

  get dtStart() {
    return this._props.dtStart;
  }

  get dtEnd() {
    return this._props.dtEnd;
  }

  set name(name: string) {
    this._props.name = name;
  }

  set dtStart(dtStart: Date) {
    this._props.dtStart = dtStart;
  }

  set dtEnd(dtEnd: Date) {
    this._props.dtEnd = dtEnd;
  }
}
