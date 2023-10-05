import { Request, Response } from "express";
export interface IUseCaseController {
  handle(req: Request, res: Response): Promise<Response>;
}
