const readline = require('readline')
const jogo = require('./jogo')
<<<<<<< HEAD
const numeroGerado = Math.floor(Math.random() * 100)
=======
const numeroGerado = 50
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

<<<<<<< HEAD
const perguntar = (readLine = rl) => {
  readLine.question('Adivinhe o número secreto: ', resposta => {
    const resultado = jogo(numeroGerado, resposta)

    if (resultado.acertou) {
      console.log('Parabéns! Você acertou.')
      return readLine.close()
    }

    console.log(resultado.mensagemErro)
    perguntar()
=======
const perguntar = () => {
    rl.question('Adivinhe o número secreto: ', resposta => {
      const resultado = jogo(numeroGerado, resposta)

      if (resultado.acertou) {
        console.log('Parabéns! Você acertou.')
        return rl.close()
      }

      console.log(resultado.mensagemErro)
      perguntar()
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
  })
}

perguntar()
<<<<<<< HEAD

module.exports = perguntar
=======
>>>>>>> de74a0744d5d80c690506d948c2513e8bef7f3b9
