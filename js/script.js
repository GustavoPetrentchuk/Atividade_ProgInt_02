const btn = document.querySelector(".btn-mode");
var tema = document.getElementById('tema');

function mudarTema(){
    if (tema.getAttribute('href') == 'css/styles.css'){
        tema.setAttribute('href', 'css/styles-dark.css');
    } else {
        tema.setAttribute('href', 'css/styles.css');
    }
}

btn.addEventListener("click", function (){
    mudarTema();
});