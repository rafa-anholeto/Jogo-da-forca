class Forca {
  constructor (word) {
    this.word = word;
    this.tries = 6;
    this.win = false;
    this.letrasChutadas= [];
    this.palavra = Array.from(word).map(e => "_");
  }

  chutar(letra) {
    let char = letra.charAt(0);
    let array = Array.from(this.word);
    let acertos = array.map((e, index) => [index, e === letra]).filter(e => e[1] == true);
    
    let jaChutei = this.letrasChutadas.filter(e => e === char).length > 0;
    if (jaChutei){
      console.log("letra repetida")
      return;
    }
    let contido = this.word.indexOf(letra) > -1;
    this.letrasChutadas.push(char);
  
    if (acertos && acertos.length > 0){
        acertos.forEach(e => this.palavra[e[0]] = char)
        this.win = this.palavra.indexOf("_") < 0
    }else {
      this.tries--;
    }
   }
   

  buscarEstado() {
    if(this.tries > 0 && !this.win)
      return "em jogo";
    return this.win ? "ganhou" : "perdeu"
   }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.tries, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
