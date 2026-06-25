const noticias = [
{
titulo: "Nova tecnologia promete revolucionar o mercado",
texto: "Especialistas afirmam que a nova inovação poderá transformar diversos setores da economia nos próximos anos."
},
{
titulo: "Equipe conquista campeonato histórico",
texto: "Após uma temporada emocionante, o time garantiu o título diante de milhares de torcedores."
},
{
titulo: "Pesquisadores descobrem nova espécie marinha",
texto: "A descoberta ocorreu durante uma expedição científica em águas profundas."
},
{
titulo: "Cidade anuncia projeto sustentável",
texto: "A iniciativa inclui energia renovável, reciclagem ampliada e transporte mais eficiente."
}
];

let indice = 0;

function trocarNoticia(){
    indice++;

    if(indice >= noticias.length){
        indice = 0;
    }

    document.getElementById("titulo").textContent =
        noticias[indice].titulo;

    document.getElementById("texto").textContent =
        noticias[indice].texto;
}