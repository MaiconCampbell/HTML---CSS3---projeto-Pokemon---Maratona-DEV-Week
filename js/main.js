const $ElBtnAvancar = document.getElementById("btnAvancar")
const $ElBtnVoltar = document.querySelector("#btnVoltar")
const $ElListaCartoes = document.querySelectorAll(".card")

let cartaoAtual = 0

// Remove o seletor do item da lista
function RemoveSeletor() {
  const $ElCardSelecionado = document.querySelector(".selecionado")
  $ElCardSelecionado.classList.remove("selecionado")
}

// Adiciona o seletor do item da lista
function AdicionaSeletor() {
  $ElListaCartoes[cartaoAtual].classList.add("selecionado")
}

$ElBtnAvancar.addEventListener("click", (event) => {
  if(cartaoAtual < $ElListaCartoes.length - 1) {
    RemoveSeletor()

    cartaoAtual++
    AdicionaSeletor()
  }
})

$ElBtnVoltar.addEventListener("click", (event) => {
  if(cartaoAtual > 0) {
    RemoveSeletor()

    cartaoAtual--
    AdicionaSeletor()
  }
})