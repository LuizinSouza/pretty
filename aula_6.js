class Celular{
    tamanho;
    cor;
    marca;

    exibirInfo(){
        console.log("o tamanho do celular e "+ this.tamanho +" a cor dele e " + this.cor + " e a marca dele e    "+ this.marca)
    }
}
let meuCelular = new Celular
meuCelular.cor ="rosa";
meuCelular.tamanho ="15cm"
meuCelular.marca ="apple"

meuCelular.exibirInfo()


class Carro{
    marca;
    cor;
    modelo; 
    ano;

    sobreCarro(){
        console.log(" a marca do carro e "+ this.marca + "a cor do caro e"+ this.cor +" o modelo e" + this.modelo + " e o ano e " + this.ano )
    }
}
var meuCarro = new Carro
meuCarro.marca = "fiat"
meuCarro.cor = "vermelho"
meuCarro.modelo ="uno"
meuCarro.ano = 1998

meuCarro.sobreCarro()