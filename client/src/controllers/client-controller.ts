import { NextFunction, Request, Response } from "express";
import ClientService from "../services/client/client.service";

class ClientController {
  async index(_: Request, response: Response, next: NextFunction) {
    try {
      const results = await ClientService.find();
      response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const results = await ClientService.create(request.body);
      response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      await ClientService.updatePassword(request.usuario?.id!, request.body.senhaatual, request.body.senhanova);
      response.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientController();
