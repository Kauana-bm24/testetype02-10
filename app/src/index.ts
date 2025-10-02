const nome: string = "Kauana";   // string
const idade: number = 25;        // number
const ativo: boolean = true;     // boolean

// Variáveis com tipos inferidos (o TS deduz o tipo automaticamente)
const cidade = "São Paulo";      // string inferido
const ano = 2025;                // number inferido
const estudante = false;         // boolean inferido

// Exibir no console
console.log("Explícitos:", nome, idade, ativo);
console.log("Inferidos:", cidade, ano, estudante);