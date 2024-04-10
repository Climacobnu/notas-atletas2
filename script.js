
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calcculaCategoria() {
        if (this.idade > 8 && this.idade < 12)
            return "Infantil"
        if (this.idade > 11 && this.idade < 14)
            return "Juvenil"
        if (this.idade > 13 && this.idade < 16)
            return "Intermediário"
        if (this.idade > 15 && this.idade < 31)
            return "Adulto"

    }

    obterNomeAtleta() {
        return this.nome
    }

    obterIdadeAtleta() {
        return this.idade
    }

    obterPesoAtleta() {
        return this.peso
    }

    obterAlturaAtleta() {
        return this.altura
    }

    obterNotasAtleta() {
        return this.notas
    }


    calculaIMC() {
        let calculaIMC = this.peso / (this.altura * this.altura)
        return calculaIMC
    }

    calcucarMediaValida() {
        let mediaValida = atleta.notas.sort((a, b) => {
            return a - b
        });

        let notasSlice = mediaValida.slice(1, 4);

        let somaNota = 0
        for (let i = 0; i < notasSlice.length; i++) {
            somaNota += notasSlice[i]
        }

        return somaNota / notasSlice.length
    }

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obterNomeAtleta()}`);
console.log(`Idade: ${atleta.obterIdadeAtleta()}`);
console.log(`Peso: ${atleta.obterPesoAtleta()}`);
console.log(`Altura: ${atleta.obterAlturaAtleta()}`);
console.log(`Notas: ${atleta.obterNotasAtleta()}`);
console.log(`Categoria: ${atleta.calcculaCategoria()}`);
console.log(`IMC: ${atleta.calculaIMC()}`);
console.log(`Média: ${atleta.calcucarMediaValida()}`);

