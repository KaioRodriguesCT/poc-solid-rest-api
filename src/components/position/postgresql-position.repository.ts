import { IRepository } from "../../commom/repository.interface";
import { Position } from "./position.entity";

export class PostgresqlPositionRepository implements IRepository<Position> {
  constructor() {}

  findById(id: number): Promise<Position | null> {
    throw new Error("Method not implemented.");
  }
  save(entity: Position): Promise<Position> {
    throw new Error("Method not implemented.");
  }
  remove(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
