const minhaTarefa = document.querySelector('input[type=text]'); //meu texto
var t;

var ul = document.querySelector("#minhaLista");//minha lista existente
var li = document.createElement("li"); //cria um elemento



document.querySelector(".adicionar").addEventListener("click", (event) => {
    t = minhaTarefa.value;
    
    li.appendChild(document.createTextNode(t));
    ul.appendChild(li); //adiciona um elemento na ul
  });
