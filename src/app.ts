import express from "express";

import { projectsRouter } from "./components/project/router";

const app = express();

app.use(express.json());
app.use("/projects", projectsRouter);

export { app };
