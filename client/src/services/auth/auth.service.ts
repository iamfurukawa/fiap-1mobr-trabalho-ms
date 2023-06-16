import jwt from "jsonwebtoken";
import Client from "../client/client.schema";
import bcrypt from "bcryptjs";

export interface AuthRequest {
  email: string;
  senha: string;
}

export interface DecodedToken {
  id: string;
  email: string;
}

class AuthService {
  async authenticate(request: AuthRequest) {
    let result = null
    try {
       result = await Client.findOne()
        .where("email").equals(request.email)
        .where("senha").equals(bcrypt.hashSync(request.senha, process.env.SALT!))
        .exec();
    } catch (error) {
        console.error(error)
        throw Error("Erro ao tentar localizar o usuario.");
    }

    if (result) 
        return this.generateJWT(result.id, result.email);

    throw Error("Usuário ou senha inválidos.");
  }

  private generateJWT(id: string, email: String) {
    return jwt.sign({id, email},
      process.env.JWT_KEY!,
      {expiresIn: "7d",}
    );
  }
}

export default new AuthService();
