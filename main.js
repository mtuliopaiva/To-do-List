const minhaTarefa = document.querySelector('input[type=text]'); //meu texto

var temp;


var ul = document.querySelector("#minhaLista");//minha lista existente
var li = document.createElement("li");


document.querySelector(".adicionar").addEventListener("click", (event) => {
    temp = minhaTarefa.value;
    var li = document.createElement("li"); //cria um elemento

    li.appendChild(document.createTextNode(temp));
    ul.appendChild(li); //adiciona um elemento na ul
    minhaTarefa.value="";

  });

  document.querySelector(".limpar").addEventListener("click", () => {
    while(minhaLista != "" ){
        console.log("deu certo");
        ul.removeChild(ul.lastChild);
    }
  });

  
  for(var i=0; i<minhaLista.childElementCount; i++){
      minhaLista.children[i].onclick = function(){
          console.log("oi");
      }
    }
  //minhaLista.children
