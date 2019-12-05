const mongoose = require('mongoose');
const { PokemonsSchema } = require('./PokemonsSchema')
const Schema = mongoose.Schema;
const TreinadoresSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
<<<<<<< HEAD
  senha:{type: String, require: true},
  
=======
  senha: {type: String, required: true},
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
  pokemons: [PokemonsSchema],
})

const treinadoresModel = mongoose.model('treinadores', TreinadoresSchema);

module.exports = treinadoresModel;
