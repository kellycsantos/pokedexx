//Botões pokemon
let btnPokemon1 = document.getElementsByClassName('pokemonBtn')[0].addEventListener('click',pokemon1)
let btnPokemon2 = document.getElementsByClassName('pokemonBtn')[1].addEventListener('click',pokemon2)
let btnPokemon3 = document.getElementsByClassName('pokemonBtn')[2].addEventListener('click',pokemon3)
let btnPokemon4 = document.getElementsByClassName('pokemonBtn')[3].addEventListener('click',pokemon4)
let btnPokemon5 = document.getElementsByClassName('pokemonBtn')[4].addEventListener('click',pokemon5)
let btnPokemon6 = document.getElementsByClassName('pokemonBtn')[5].addEventListener('click',pokemon6)
let btnPokemon7 = document.getElementsByClassName('pokemonBtn')[6].addEventListener('click',pokemon7)


// Alterações Dom
let pokemonImg = document.getElementById('pokeImg')
let pokemonNome = document.getElementById('nome')
let pokemonResumo = document.getElementsByClassName('resumo')[0]
let corFundo = document.body

//Função de cada botão
function pokemon1(){
    pokemonNome.innerText= pokemonLista[0].nome
    pokemonImg.setAttribute('src',pokemonLista[0].foto)
    pokemonResumo.innerText=pokemonLista[0].resumo
    corFundo.style.background=pokemonLista[0].bgColor
}

function pokemon2(){
    pokemonNome.innerText= pokemonLista[1].nome
    pokemonImg.setAttribute('src',pokemonLista[1].foto)
    pokemonResumo.innerText=pokemonLista[1].resumo
    corFundo.style.background=pokemonLista[1].bgColor
}

function pokemon3(){
    pokemonNome.innerText= pokemonLista[2].nome
    pokemonImg.setAttribute('src',pokemonLista[2].foto)
    pokemonResumo.innerText=pokemonLista[2].resumo
    corFundo.style.background=pokemonLista[2].bgColor
}

function pokemon4(){
    pokemonNome.innerText= pokemonLista[3].nome
    pokemonImg.setAttribute('src',pokemonLista[3].foto)
    pokemonResumo.innerText=pokemonLista[3].resumo
    corFundo.style.background=pokemonLista[3].bgColor
}

function pokemon5(){
    pokemonNome.innerText= pokemonLista[4].nome
    pokemonImg.setAttribute('src',pokemonLista[4].foto)
    pokemonResumo.innerText=pokemonLista[4].resumo
    corFundo.style.background=pokemonLista[4].bgColor
}

function pokemon6(){
    pokemonNome.innerText= pokemonLista[5].nome
    pokemonImg.setAttribute('src',pokemonLista[5].foto)
    pokemonResumo.innerText=pokemonLista[5].resumo
    corFundo.style.background=pokemonLista[5].bgColor
}

function pokemon7(){
    pokemonNome.innerText= pokemonLista[6].nome
    pokemonImg.setAttribute('src',pokemonLista[6].foto)
    pokemonResumo.innerText=pokemonLista[6].resumo
    corFundo.style.background=pokemonLista[6].bgColor
}

//Informações para modificação
let pokemonLista=[
    {nome:"Bulbassauro", foto:"./imagens/bulbasaur.png", bgColor:"#76ee94" ,resumo:"Bulbasaur pode ser visto tirando uma soneca ao sol. A semente nas suas costas cresce cada vez mais à medida que absorve os raios solares."},
    {nome:"Cubone", foto:"./imagens/cubone.png" , bgColor:"#eec476" ,resumo:"Cubone se lamenta pela mãe que não verá de novo. A lua cheia lembra este Pokémon de sua mãe, o que o faz chorar. As manchas na sua caveira são causadas por suas lágrimas."},
    {nome:"Mr. Mine", foto:"./imagens/mr_mime.png", bgColor:"#ee7694" ,resumo:"Mr. Mime é um mestre em pantomima. Seus gestos e movimentos convencem os espectadores de que algo invisível realmente existe. Uma vez que os espectadores acreditam, aquilo que era invisível se torna palpável."},
    {nome:"Pikachu", foto:"./imagens/pikachu.png", bgColor:"#eee676" ,resumo:"Quando Pikachu acha alguma coisa nova, lança uma carga elétrica nela. Se você encontrar uma fruta torrada, é prova de que este Pokémon errou na intensidade de sua carga elétrica."},
    {nome:"Porigon-z", foto:"./imagens/porigon-z.png", bgColor:"#9676ee" ,resumo:"Uma atualização defeituosa foi realizada na sua programação. Como seu comportamento é visivelmente estranho, é possível que o experimento tenha dado errado."},
    {nome:"Snorlax", foto:"./imagens/snorlax.png", bgColor:"#76eea8" ,resumo:"Um dia normal da vida de Snorlax consiste em comer e dormir. É um Pokémon tão dócil que é fácil de ver crianças brincando em cima da sua barriga enorme."},
    {nome:"Vaporeon", foto:"./imagens/vaporeon.png", bgColor:"#5eaec2" ,resumo:"Vaporeon sofreu uma mutação repentina e cresceu brânquias e barbatanas que permitem que viva na água. Este Pokémon tem a habilidade de controlar água."},
]


//Seleção aleatoria ao iniciar a pagina
var funcaoLista= [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6,pokemon7]

function selecaoAle(){
    funcaoLista[(Math.floor(Math.random()*funcaoLista.length))]()
}

selecaoAle()