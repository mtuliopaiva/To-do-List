const minhaTarefa = document.querySelector('input[type=text]'); //meu texto

var ul = document.querySelector("#minhaLista");//minha lista existente
var li = document.createElement("li"); //cria um elemento

li.appendChild(document.createTextNode("Work"));
ul.appendChild(li); //adiciona um elemento na ul

