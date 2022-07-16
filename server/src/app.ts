import express from "express";
import cors from "cors";

import resourcesRouter from "./api/routes/resources-router";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resources", resourcesRouter);

app.listen(8080, () => console.log("server listening on port 8080"));
