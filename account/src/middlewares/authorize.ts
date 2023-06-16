import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { DecodedToken } from "../services/auth/auth.service";

const Authorize = async (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers.authorization;

  if (!token) 
    return response.status(403).send({ error: "Acesso Negado." });

  jwt.verify(token.split(' ')[1] || '', process.env.JWT_KEY!,
    (error, result) => {
      if (error) {
        console.error(error)
        return response.status(401).send({ error: `Token inválido` });
      }
        
      request.usuario = result as DecodedToken;

      next();
    }
  );
};

export default Authorize;
