const { connect } = require('../models/Repository')
const treinadoresModel = require('../models/TreinadoresSchema')
const { pokemonsModel } = require('../models/PokemonsSchema')
const bcrypt = require('bcryptjs')
connect()

const getAll = (request, response) => {
  treinadoresModel.find((error, treinadores) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(treinadores)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return treinadoresModel.findById(id, (error, treinador) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (treinador) {
      return response.status(200).send(treinador)
    }

    return response.status(404).send('Treinador não encontrado.')
  })
}

const add = (request, response) => {
  if(!request.body.senha){
    return response.status(400).send("bota a senha ai coroi")
  }
  const senhaCriptonita = bcrypt.hashSync(request.body.senha)
  const novoObjeto = new Object(request.body)
  novoObjeto.senha = senhaCriptonita
  const novoTreinador = new treinadoresModel(request.body)

  novoTreinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoTreinador)
  })
}
const login = async (request, responde)=>{
  const email = request.body.email
  const senha = request.body.senha
  const treinador = await treinadoresModel.findOne({email})
  const senhaValida = bcrypt.compareSync(senha,treinador.senha)
  if(!treinador){
    return responde.status(404).send('E-mail digitado não está cadastrado')
  }
  if(senhaValida){
    return response.status(200).send('Você logou!')
  }
    return response.status(401).send('Senha inválida')

}


const remove = (request, response) => {
  const id = request.params.id

  treinadoresModel.findByIdAndDelete(id, (error, treinador) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (treinador) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Treinador não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const treinadorUpdate = request.body

  treinadoresModel.findByIdAndUpdate(
    {_id: id}, //filtros que identificam o id que vamos atualizar
    { $set: { //desta maneira se passa os campos que pretende atualizar. SET é usado em arrays, 
      // quando não se sabe ao certo a posição
    'treinadoresModel.$.nome': treinadorUpdate.nome,
    'trenadoresModel.$.email': treinadorUpdate.email,
    'treinadoresModel.$.foto': treinadorUpdate.foto
  }},
    {new : true},
    (error, treinador) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (treinador) {
        return response.status(200).send({new : true})
      }

      return response.status(404).send('Treinador não encontrado.')
    }
  )
}

const addPokemon = async (request, response) => {
  const treinadorId = request.params.treinadorId
  const pokemon = request.body
  const options = { new: true }
  const novoPokemon = new pokemonsModel(pokemon)
  const treinador = await treinadoresModel.findById(treinadorId)

  treinador.pokemons.push(novoPokemon)
  treinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(treinador)
  })
}

const calcularNivel = (inicio, fim, nivelAtual) => {
  const novoNivel = (Math.abs(new Date(inicio) - new Date(fim)) / 3600000) / 4

  return novoNivel + nivelAtual;
}

const treinarPokemon = async (request, response) => {
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const inicio = request.body.inicio
  const fim = request.body.fim
  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find((pokemon) => pokemonId == pokemon._id)
  const novoNivel = calcularnNivel(inicio, fim, pokemon.nivel)

  pokemon.nivel = novoNivel
  treinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(treinador)
  })
}

const buscarPokemon = async (request,response) => {
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId

  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find((pokemon) =>{ return pokemonId == pokemon._id}) //Obs: pokemon._id é um ObjectId (tipo do MongoDB)

  if (!pokemon) {
    return response.status(500).send("error")
  }

  return response.status(200).send(pokemon)
  }

  const getAllPokemons = async (request, response) => {
    const treinadorId = request.params.treinadorId
    const treinador = await treinadoresModel.findById(treinadorId)
  
    if (treinador) {
      return response.status(200).send(treinador.pokemons)
  }
      return response.status(404).send("treinador não encontrado")
  }


  const updatePokemon = (request, response) => {
    const treinadorId = request.params.treinadorId
    const PokemonId = request.params.pokemonId

    treinadoresModel.findByOneAndUpdate( 
      {_id: treinadorId, 'pokemons.$._id': pokemonId}, //filtros que identificam o id que vamos atualizar
      { $set: { //desta maneira se passa os campos que pretende atualizar. SET é usado em arrays, quando não se sabe ao certo a posição
        'pokemons.$.nome': pokemon.nome,
        'pokemons.$.foto': pokemon.foto
      }},
      {new: true},
      (error, treinador) => {
        if (error) {
          return response.status(200).send(error)
        }
          return response.status(200).send(treinador)
      })
  }


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  addPokemon, 
  treinarPokemon,
  buscarPokemon,
  getAllPokemons,
  updatePokemon,
  login
}
