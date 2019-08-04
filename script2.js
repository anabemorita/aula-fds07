// let nome = document.querySelector("h2");
// let paragrafo = document.querySelector("#lorem");
// let botao = document.querySelector("button");

// paragrafo.style.border = "2px solid red";
// let nomeDigitado = prompt("Digite o seu nome");

// nome.innerHTML = nomeDigitado;
// nome.style.backgroundColor = "red";

// function trocarCor(){
//     let body = document.querySelector("body");
//     body.style.backgroundColor = "aquamarine";
// }

// botao.onclick = trocarCor;

let botao = document.querySelector("button");
let nav = document.querySelector("nav");

function AparecerMenu(){
    // if(nav.classList.contains("ativo")){
    //     nav.classList.remove("ativo");
    // }else{
    //     nav.classList.add("ativo");
    // }
    nav.classList.toggle("ativo");
}

botao.onclick = AparecerMenu;
