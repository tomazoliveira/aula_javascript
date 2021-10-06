
function clicou() {
    //selecionano o elemento agradecimento atraves do ID e injetando um HTML nele.
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}

function redirecionar() {
    //ao chamar essa funcão, abrirá em nova aba o site especificado
    window.open("https://www.youtube.com");

    //ao chamar essa funcão, será redirecionado ao site especificado
    window.location.href = "https://www.youtube.com";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; //necessário apenas quando é passado a ID
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; //necessário apenas quando é passado a ID
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    //função que exibira uma mensagem assim que a pagina for carregada
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    //.value serve para pegar o valor que possui aquele elemento
    console.log(elemento.value)
}