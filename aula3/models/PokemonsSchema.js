const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PokemonsSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  foto: { type: String, required: true },
<<<<<<< HEAD
  senha: { type: String },
=======
  senha: { type: String, required: true },
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
  nivel: { type: Number },
})

const pokemonsModel = mongoose.model('pokemons', PokemonsSchema);

module.exports = { pokemonsModel, PokemonsSchema };
