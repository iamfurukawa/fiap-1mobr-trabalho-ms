import { NextFunction, Request, Response } from "express";
import AccountService from "../services/account/account.service";

class AccountController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const results = await AccountService.retrieveAllAccountsForThis(request.usuario!);
      response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      request.body['client_id'] = request.usuario?.id;
      const results = await AccountService.create(request.body);
      response.json(results);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      await AccountService.update(request.params.id, request.body);
      response.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

export default new AccountController();
