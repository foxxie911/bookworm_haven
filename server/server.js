import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.post("/", (req, res) => {
  console.log(req);
  res.json({ massage: "data received", data: req.body });
});

app.use("*", (res, req) => {
  res.statusCode(404).json({ msg: "Not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({msg: 'Something went wrong'});
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server running on port  ${port}...`);
});
