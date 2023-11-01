import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express, { application } from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";

// Middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { authenticateUser } from "./middlewares/authMiddlewares.js";
// import { validateTest } from "./middlewares/validators.js";

// ROUTERS
import bookRouter from "./routers/bookRouter.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Cookie Parser
app.use(cookieParser());

app.use(express.json());
// Book Request
app.use("/api/book", authenticateUser, bookRouter);
// User Request
app.use("/api/user", authenticateUser, userRouter);
// Authentication Request
app.use("/api/auth", authRouter);
// Test Request
app.use("/api/test", (req, res) => {
  res.json({ msg: "test request" });
});

// // Test GET
// app.get("/api/test", validateTest, (req, res) => {
//   res.json({msg: "Hello, This is a test."});
// })

// // Test POST
// app.post("/api/test", validateTest, (req, res) => {
//   const { name } = req.body;
//   res.json({ msg: `Hello, ${name}` });
// });

// Not Found (Error-404) Middleware
app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "Not found" });
});

app.use(errorHandlerMiddleware);

// Error Handler Middleware Test
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ msg: "Something went wrong" });
// });

const port = process.env.PORT || 5100;

// MONGOOSE CONNECT
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
