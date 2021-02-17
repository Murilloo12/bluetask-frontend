const letras = ["A","B","C"];
//const letraA = letras[0];
//const letraB = letras[1];
const [letraA,letraB,letraC] = letras;

console.log(`letraA = ${letraA}, letraB = ${letraB}, letraC = ${letraC}`);

const [ l ] = letras;
console.log(l);

const carro = {
    modelo:"Fusca",
    ano: 1982,
    motoristas: ["Pedro","Ze"]
}

const {modelo,motoristas} = carro;
console.log(modelo);
console.log(motoristas);
