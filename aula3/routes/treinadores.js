const express = require('express');
const router = express.Router();

const controller = require("../controllers/TreinadoresController")

<<<<<<< HEAD

=======
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
router.get('', controller.getAll)
router.post('', controller.add)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:treinadorId/pokemons', controller.addPokemon)
router.patch('/:treinadorId/pokemons/:pokemonId/treinar', controller.treinarPokemon)
<<<<<<< HEAD
router.get('/:id/pokemons', controller.getPokemons)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
router.get('/:treinadorId/pokemons/:pokemonId', controller.getPokemonById)
router.post('/login', controller.login)

module.exports = router
=======
router.get('/:treinadorId/pokemons/:pokemonId', controller.getPokemonById)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
router.post('/login', controller.login)

module.exports = router
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
