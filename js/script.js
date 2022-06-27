const btn = document.querySelector(".btn-mode");
var tema = document.getElementById('tema');

function mudarTema(){
    if (tema.getAttribute('href') == '../css/styles.css'){
        tema.setAttribute('href', '../css/styles-dark.css');
        document.cookie = "css=Dark";
    } else {
        tema.setAttribute('href', '../css/styles.css');
        document.cookie = "css=Light";
    }
}

btn.addEventListener("click", function (){
    mudarTema();
});