import { DecodedToken } from "../auth/auth.service";
import Account, { AccountInterface } from "./account.schema";

class AccountService {
  async retrieveAllAccountsForThis(user: DecodedToken) {
    const data = await Account.find()
      .where('client_id').equals(user.id);

    return data.map((account: AccountInterface) => ({
      account_id: account._id,
      nome_banco: account.nome_banco,
      tipo_conta: account.tipo_conta,
      nome_titular: account.nome_titular,
      limite_cartao: account.limite_cartao,
    }));
  }

  async create(account: AccountInterface) {
    const created = await Account.create(account);

    return {
      account_id: created._id,
      nome_banco: created.nome_banco,
      tipo_conta: created.tipo_conta,
      nome_titular: created.nome_titular,
      limite_cartao: created.limite_cartao,
    };
  }

  async update(accountId: string, accountData: AccountInterface) {
    const result = await Account.findByIdAndUpdate(accountId, accountData, {new: true});

    if(!result)
      throw Error("Conta não encontrada!")
  }
}

export default new AccountService();
