import express from "express";
import { createProjectController } from "./use-cases/create-project";

const router = express.Router();

router.post("/", (request, response) => {
  return createProjectController.handle(request, response);
});

const projectsRouter = router;

export { projectsRouter };
