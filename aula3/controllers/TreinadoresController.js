const { connect } = require('../models/Repository')
const treinadoresModel = require('../models/TreinadoresSchema')
const { pokemonsModel } = require('../models/PokemonsSchema')
const bcrypt = require('bcryptjs')
<<<<<<< HEAD
const jwt = require('jsonwebtoken')

const CHAVE_PUBLICA = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCOl54HaBM/WiL/jPPdFGjm9f8VprUst1J+vs7G/YRGRHYLGqt+M/ljAhcROPy3FdaVi2smqqyZhf4d+EZ9lKM6LVed91sxvcyMFEp6x8R2KS9wIzUtJ6r1MAIKd8HURmbaN4V2TV/FLeOUANRCZ+QhYEy+eNbuVIJANYtXBUSn8QIDAQAB'
const CHAVE_PRIVADA = 'MIICXAIBAAKBgQCOl54HaBM/WiL/jPPdFGjm9f8VprUst1J+vs7G/YRGRHYLGqt+M/ljAhcROPy3FdaVi2smqqyZhf4d+EZ9lKM6LVed91sxvcyMFEp6x8R2KS9wIzUtJ6r1MAIKd8HURmbaN4V2TV/FLeOUANRCZ+QhYEy+eNbuVIJANYtXBUSn8QIDAQABAoGBAIuVS/MAJGdNuxjiSA5Q3mfIw03UhWIiirTb39rXbNbESbGRB/NguW38K8yGNoya6hY2BkwxowgeLKX11js0d5sSHgEgL+pDQtXshHu7vlYU0ksHwfmD/R8+ZHJH6F6L0vuzs4NoVK/8iQHFLboUjF2sORyuLHbBmFZQWhInet8pAkEA0OlL2uHCYhkNuokJ9H+OnJEqKS2BtYSkH3Hrh2opZg2HtvUtXEIxzmj/95CzxMXQtNJhQMK3ekvnF3Upcj2avwJBAK67i8OEKM2jerbFKrBqr6/kUkZeyHLA8I4L2C3/3nKPGUj/GAc2xxuK1XxnpC0e3Wqz5OMwzkWU4Ynblsdq2U8CQHu9U6LICbzVHh6YwP7C9xOhoBlXzPZZJGVDssA4j2DVLsednUqCIsIhy0s1uGUazi3sVpJnQwn7H1vzl6ME/j0CQAT7qj+4LCW5LM27j70aPcppW4NQPq0vHW0fn1moe2KO/CydwcSq5kC909rJZeA3ih755GQqRyeq2EfDMGidfncCQD770Za6sJP1/i1vcdoWuWYnhpiU8TNKjFb2vJEN598amcyJV9PlAAdEkszh6EDA76t6/yT6NoUn/y9x4YskzQo='
connect()

const verificarLogin = (request, response) => {
  const authHeader = request.get('authorization')
  let autenticado = false

  if (!authHeader) {
    return autenticado
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, CHAVE_PRIVADA, (error, decoded) => {
    if (error) {
      autenticado = false
    } else {
      autenticado = true
    }
  })
  return autenticado
}

=======

connect()

>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
const calcularNivel = (inicio, fim, nivelAtual) => {
  const diff = Math.abs(new Date(inicio) - new Date(fim)) / 3600000

  return (diff / 4) + nivelAtual;
}

<<<<<<< HEAD
const montarPokemonUpdateBody = async (body) => {
  let setBody = {}

  if (body.nome) {
    setBody['pokemons.$.nome'] = body.nome
  }

  if (body.foto) {
    setBody['pokemons.$.foto'] = body.foto
  }

  return (
    {
      $set: setBody
    }
  )
}

=======
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
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
<<<<<<< HEAD
=======
  if (!request.body.senha) {
    return response.status(400).send('bota a senha aí')
  }
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
  const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  request.body.senha = senhaCriptografada
  const novoTreinador = new treinadoresModel(request.body)

  novoTreinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoTreinador)
  })
}

<<<<<<< HEAD
=======
const login = async (request, response) => {
  const email = request.body.email
  const senha = request.body.senha
  const treinador = await treinadoresModel.findOne({ email })
  const senhaValida = bcrypt.compareSync(senha, treinador.senha)

  if (senhaValida) {
    return response.status(200).send('Usuário logado')
  }

  return response.status(401).send('Usuário ou senha inválidos')
}

>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
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
  const options = { new: true }

  treinadoresModel.findByIdAndUpdate(
    id,
    treinadorUpdate,
    options,
    (error, treinador) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (treinador) {
        return response.status(200).send(treinador)
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

const treinarPokemon = async (request, response) => {
<<<<<<< HEAD
  const pokemonId = request.params.pokemonId
  const treinadorId = request.params.treinadorId
  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find(pokemon => pokemon._id == pokemonId)

  pokemon.nivel = calcularNivel(request.body.inicio, request.body.fim, pokemon.nivel)

  return treinador.save((error) => {
=======
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const inicio = request.body.inicio
  const fim = request.body.fim
  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find((pokemon) => pokemonId == pokemon._id)
  const novoNivel = calcularNivel(inicio, fim, pokemon.nivel)

  pokemon.nivel = novoNivel
  treinador.save((error) => {
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(treinador)
  })
}

<<<<<<< HEAD
const getPokemons = async (request, response) => {
  const authHeader = request.get('authorization')
  let autenticado = false

  if (!authHeader) {
    return response.status(401).send('Você precisa fazer login!')
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, CHAVE_PRIVADA, (error, decoded) => {
    if (error) {
      autenticado = false
    } else {
      autenticado = true
    }
  })

  if (!autenticado) {
    return response.status(403).send('Acesso negado.')
  }

  const treinadorId = request.params.id
  await treinadoresModel.findById(treinadorId, (error, treinador) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (treinador) {
      return response.status(200).send(treinador.pokemons)
    }

    return response.status(404).send('Treinador não encontrado.')
  })
}
const updatePokemon = async (request, response) => {
  const autenticado = verificarLogin(request)
  if(!autenticado){
    return response.status(400).send('Acesso negado')
  }
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const options = { new: true }
  const updateBody = await montarPokemonUpdateBody(request.body)

  treinadoresModel.findOneAndUpdate(
    { _id: treinadorId, 'pokemons._id': pokemonId },
    updateBody,
    options,
=======
const getPokemonById = async (request, response) => {
  const treinadorId = request.body.treinadorId
  const pokemonId = request.body.pokemonId
  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find((pokemon) => {
    return pokemonId == pokemon._id
  })

  if (pokemon) {
    return response.status(200).send(pokemon)
  }

  return response.status(404).send('Pokémon não encontrado')
}

const getAllPokemons = async (request, response) => {
  const treinadorId = request.params.id
  const treinador = await treinadoresModel.findById(id)

  if (treinador) {
    return response.status(200).send(treinador.pokemons)
  }

  return response.status(404).send('Treinador não encontrado.')
}

const updatePokemon = (request, response) => {
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const pokemon = request.body

  treinadoresModel.findOneAndUpdate(
    { _id: treinadorId, 'pokemons.$._id': pokemonId },
    { $set:
        {
          'pokemons.$.nome': pokemon.nome,
          'pokemons.$.foto': pokemon.foto
        }
    },
    { new: true },
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
    (error, treinador) => {
      if (error) {
        return response.status(500).send(error)
      }

<<<<<<< HEAD
      if (treinador) {
        return response.status(200).send(treinador)
      }

      return response.status(404).send('Treinador não encontrado.')
=======
      return response.status(200).send(treinador)
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
    }
  )
}

<<<<<<< HEAD
const getPokemonById = async (request, response) => {
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find(pokemon => pokemon._id == pokemonId)

  return response.status(200).send(pokemon)
}

const login = async (request, response) => {
  const treinadorEncontrado = await treinadoresModel.findOne({ email: request.body.email })

  if (treinadorEncontrado) {
    const senhaCorreta = bcrypt.compareSync(request.body.senha, treinadorEncontrado.senha)

    if (senhaCorreta) {
      const token = jwt.sign(
        {
          email: treinadorEncontrado.email,
          id: treinadorEncontrado._id
        },
        CHAVE_PRIVADA,
        { expiresIn: 6000 }
      )

      return response.status(200).send({ token })
    }

    return response.status(401).send('Senha incorreta.')
  }

  return response.status(404).send('Treinador não encontrado.')
}

=======
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  addPokemon,
  treinarPokemon,
<<<<<<< HEAD
  getPokemons,
  updatePokemon,
  getPokemonById,
  login
}
=======
  getPokemonById,
  updatePokemon,
  login
}
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
