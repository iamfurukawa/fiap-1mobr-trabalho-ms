import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth/auth.service";

class AuthController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const token = await AuthService.authenticate(request.body);
      response.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
