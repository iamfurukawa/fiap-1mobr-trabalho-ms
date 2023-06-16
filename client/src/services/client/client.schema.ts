import { Document, model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface ClientInterface extends Document {
  nomeusuario: String;
  email: String;
  senha: String;
  nomecompleto: String;
  telefone: String;
  datacadastro?: Date;
}

const ClientSchema = new Schema<ClientInterface>({
  nomeusuario: String,
  email: String,
  senha: String,
  nomecompleto: String,
  telefone: String,
  datacadastro: {
    type: Date,
    default: new Date(),
  },
});

ClientSchema.pre("save", function (next) {
  this.senha = bcrypt.hashSync(this.senha.toString(), process.env.SALT!)
  return next()
});

const Client = model<ClientInterface>("client", ClientSchema);

export default Client;
