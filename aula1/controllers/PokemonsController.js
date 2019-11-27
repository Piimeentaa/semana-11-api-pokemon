const { connect } = require('../models/Repository')
const pokemonsModel = require('../models/PokemonsSchema')

connect()

const getAll = (request, response) => {
  pokemonsModel.find((error, pokemons) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(pokemons)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return pokemonsModel.findById(id, (error, pokemon) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (pokemon) {
      return response.status(200).send(pokemon)
    }

    return response.status(404).send('Pokémon não encontrado.')
  })
}

const add = (request, response) => {
  const novoPokemon = new pokemonsModel(request.body)

  novoPokemon.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoPokemon)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  pokemonsModel.findByIdAndDelete(id, (error, pokemon) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (pokemon) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Pokémon não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const pokemonUpdate = request.body
  const dataInicio = request.body.dataInicio
  const dataFim = request.body.dataFim
  const options = { new: true }
  const calculoNivel = (Math.abs(new Date(dataInicio) - new Date(dataFim)) / 3600000) / 4

  pokemonsModel.findByIdAndUpdate(
    id,
    {nivel: calculoNivel},
    options,
    (error, pokemon) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (pokemon) {
        return response.status(200).send(pokemon)
      }

      return response.status(404).send('Pokémon não encontrado.')
    }
  )
}

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}
