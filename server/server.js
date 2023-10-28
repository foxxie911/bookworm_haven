import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// Middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
// import { validateTest } from "./middlewares/validators.js";

// ROUTERS
import bookRouter from "./routers/bookRouter.js";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//BOOK REQUEST
app.use("/api/book", bookRouter);

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
  res.status(404).json({ msg: "Not found" });
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
