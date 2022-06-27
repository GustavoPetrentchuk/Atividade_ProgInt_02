const btn = document.querySelector(".btn-mode");
var tema = document.getElementById('tema');

function mudarTema() {
    if (tema.getAttribute('href') == '../css/styles.css'){
        tema.setAttribute('href', '../css/styles-dark.css');
        localStorage.setItem('salvar-tema', '../css/styles-dark.css');
        //document.cookie = "css=Dark";
    } else {
        tema.setAttribute('href', '../css/styles.css');
        //document.cookie = "css=Light";
        localStorage.setItem('salvar-tema', '../css/styles.css');
    }
}

window.onload = function (){
    var temainit = localStorage.getItem('salvar-tema');
    if (temainit == 'undefined'){
        localStorage.setItem('salvar-tema', '../css/styles.css');
    }
    tema.setAttribute('href',localStorage.getItem('salvar-tema'));
}

btn.addEventListener("click", function (){
    mudarTema();
});