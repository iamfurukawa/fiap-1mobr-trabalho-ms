import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv/config";
import connectDB from "./services/database";
import { DecodedToken } from "./services/auth/auth.service";

declare global {
  namespace Express {
    interface Request {
      usuario?: DecodedToken;
    }
  }
}

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  (error: Error, _: Request, response: Response, __: NextFunction) => {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
);

app.listen(4444, () => "server running on port 4444");
