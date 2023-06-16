import Client, { ClientInterface } from "./client.schema";
import bcrypt from "bcryptjs";

class ClientService {
  async find() {
    const data = await Client.find({});
    return data.map((client: ClientInterface) => ({
      id: client._id,
      nomeusuario: client.nomeusuario,
      email: client.email,
      nomecompleto: client.nomecompleto,
      telefone: client.telefone,
      datacadastro: client.datacadastro,
    }));
  }

  async create(client: ClientInterface) {

    const result = await Client.findOne()
        .where("email").equals(client.email)
    
    if(result)
        throw Error('Usuário já existe.')

    const created = await Client.create(client);

    return {
      id: created._id,
      nomeusuario: created.nomeusuario,
      email: created.email,
      nomecompleto: created.nomecompleto,
      telefone: created.telefone,
      datacadastro: created.datacadastro,
    };
  }

  async updatePassword(id: string, senhaatual: string, senhanova: string) {
    if(senhaatual === senhanova)
        throw Error('A senha nova deve ser diferente da antiga.')

    const client = await Client.findById(id);

    if(!client)
        throw Error('Usuário não encontrado.')

    if(bcrypt.hashSync(senhaatual, process.env.SALT!) !== client.senha)
        throw Error('A senha antiga está inválida.')
    
    client.senha = senhanova
    await client.save();
  }
}

export default new ClientService();
