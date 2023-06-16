import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO!);
    console.log("Conexão com o MongoDB estabelecida com sucesso.")
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error)
  }
}

export default connectDB