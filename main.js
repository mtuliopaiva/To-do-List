const minhaTarefa = document.querySelector('input[type=text]'); //meu texto
var t;

var ul = document.querySelector("#minhaLista");//minha lista existente


document.querySelector(".adicionar").addEventListener("click", (event) => {
    t = minhaTarefa.value;
    var li = document.createElement("li"); //cria um elemento
    li.appendChild(document.createTextNode(t));
    ul.appendChild(li); //adiciona um elemento na ul
    minhaTarefa.value="";
  });

  document.querySelector(".limpar").addEventListener("click", () => {

    while(minhaLista != "" ){
        console.log("deu certo");
        ul.removeChild(ul.lastChild);
    }
  });
