import { Document, model, Schema } from "mongoose";

export interface AccountInterface extends Document {
  client_id: String;
  nome_banco: String;
  tipo_conta: String;
  nome_titular: String;
  limite_cartao: Number;
}

const AccountSchema = new Schema<AccountInterface>({
  client_id: String,
  nome_banco: String,
  tipo_conta: String,
  nome_titular: String,
  limite_cartao: Number
});

const Account = model<AccountInterface>("account", AccountSchema);

export default Account;
