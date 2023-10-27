import 'express-async-errors';
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

//ROUTERS
import bookRouter from "./routers/bookRouter.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//BOOK REQUEST
app.use("/api/book", bookRouter);

// TEST POST
// app.post('/', (req, res)=>{
//   console.log(req);
//   res.json({msg: "Data Received.", data: req.body});
// })

// Not Found (Error-404) Middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something went wrong" });
});

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