const express = require('express');
const router = express.Router();

const controller = require("../controllers/TreinadoresController")


router.get('', controller.getAll)
router.post('', controller.add)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:treinadorId/pokemons', controller.addPokemon)
<<<<<<< HEAD
router.patch('/:treinador/pokemons/:pokemons/treinar', controller.treinarPokemon)
router.get('/:treinadorId/pokemons/:pokemonId/buscar', controller.buscarPokemon)
router.get('/:treinadorId/pokemons', controller.getAllPokemons)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
router.post('/login', controller.login)
<<<<<<< HEAD
=======
=======
router.patch('/:treinadorId/pokemons/:pokemonId/treinar', controller.treinarPokemon)
router.get('/:treinadorId/pokemons/:pokemonId', controller.getPokemonById)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
>>>>>>> 94da74c30417ba76d1856d90be6b169b7e7fb663
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9

module.exports = router

//API idiomática