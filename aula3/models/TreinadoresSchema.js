const mongoose = require('mongoose');
const { PokemonsSchema } = require('./PokemonsSchema')
const Schema = mongoose.Schema;
const TreinadoresSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
<<<<<<< HEAD
  pokemons: [PokemonsSchema],
  senha: { type: String, required: true },
=======
  senha: { type: String, required: true },
  pokemons: [PokemonsSchema],
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
})

const treinadoresModel = mongoose.model('treinadores', TreinadoresSchema);

<<<<<<< HEAD
module.exports = treinadoresModel;
=======
module.exports = treinadoresModel;
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
