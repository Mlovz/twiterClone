import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

import "./config/database";
import routes from "./routes";

app.use("/api", routes.authRoute);
app.use("/api", routes.userRoute);
app.use("/api", routes.categoryRoute);
app.use("/api", routes.blogRoute);
app.use("/api", routes.commentRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Сервер запущен на порте", PORT);
});
