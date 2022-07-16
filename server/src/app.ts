import express from "express";
import cors from "cors";

import resourcesRouter from "./api/routes/resources-router";
import mailRouter from "./api/routes/mail-router";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resources", resourcesRouter);
app.use("/api/mail", mailRouter);

app.listen(8080, () => console.log("server listening on port 8080"));
