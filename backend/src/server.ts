import express from "express";
import "express-async-errors";
import "./database/connection";
import path from "path";
import routes from "./routes";
import errorHandler from "./errors/handler";

import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(errorHandler);

const port = 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
