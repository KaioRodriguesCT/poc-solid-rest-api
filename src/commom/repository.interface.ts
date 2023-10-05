export interface IRepository<T> {
  save(entity: T): Promise<T>;
  remove(id: number): Promise<void>;
  findById(id: number): Promise<T | null>;
}
