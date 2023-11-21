const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  enderecos: [
    {
      rua: { type: String },
      numero: { type: Number, required: true },
      complemento: { type: String },
      CEP: { type: String, required: true },
      createdAt: { type: Date, required: true, default: Date.now() }
    }
  ],

  createdAt: { type: Date, required: true, default: Date.now() },
  // produtosFav:[
  //   {
  //      _id:{ type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"produtos"},
  //    createdAt: {type: Date, required:true, default: Date.now()}
  // }
  //],
  admin: { type: Boolean, default: false }

});

UsuarioSchema.pre("save", async function (next) {
    if (this.senha) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
   next();
});

const Usuario = mongoose.model("Usuarios", UsuarioSchema);

module.exports = Usuario;