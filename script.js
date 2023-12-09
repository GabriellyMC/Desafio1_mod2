console.log("Ano Novo está chegando!!");
let nome = "Mariah Carey";
let idade = 54;
let ano = 2023;
const anoNascimento = ano - idade;
console.log(anoNascimento);

let quartaFeira = true;
console.log(quartaFeira);
console.log(typeof quartaFeira);

let _idade = 27;
if (_idade >= 18) {
  console.log(
    "Você é maior de idade, poderá curti o show do Roberto Carlos com a participação especial da Mariah Carey."
  );
} else {
  console.log("sinto muito, mas assistirá da Tv Globo.");
}

let niver = "Novembro";
if (niver === "Agosto" || niver == "Dezembro" || niver == "Junho") {
  console.log("Uma ou mais opções estão corretas. O mês escolhido foi tal.");
} else {
  console.log(`Algo de errado não está certo, o mês digitado foi ${niver}.`);
}
