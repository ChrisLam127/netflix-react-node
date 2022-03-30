const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require("./routes/lists");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is Connected....");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
