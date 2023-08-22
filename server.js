import express from "express";
import colors from "colors";
import dotenv from "dotenv";

import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';
// configenv
dotenv.config();

// database connection fn
connectDB();
const app = express();

// middle wares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecom app</h1>");
});

const PORT = process.env.PORT || 8080;
// app.post("/", (req, res) => {
//   request("API_URL", (error, response, body) => {
//     console.log(response.statusCode);
//   });
//   res.send("Successfully post req setup");
// });

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
