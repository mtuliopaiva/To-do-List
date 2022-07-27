const minhaTarefa = document.querySelector('input[type=text]'); //meu texto
var temp;
const elemento = document.getElementById('minhaLista');

var ul = document.querySelector("#minhaLista");//minha lista existente
var li = document.createElement("li");


document.querySelector(".adicionar").addEventListener("click", (event) => {
    temp = minhaTarefa.value;
    var li = document.createElement("li"); //cria um elemento

    li.appendChild(document.createTextNode(temp));
    ul.appendChild(li); //adiciona um elemento na ul
    minhaTarefa.value="";
    mapear(); //mapear sempre que adicionar elemento na lista
  });

  document.querySelector(".limpar").addEventListener("click", () => {
    while(minhaLista != "" ){
        ul.removeChild(ul.lastChild);
    }
  });
    
    function mapear(){ // Função que mapeia a lista
    for(let cont=0; cont < elemento.childElementCount; cont++){
      elemento.children[cont].onclick = function(){
        elemento.children[cont].style.color = "red" //altera a cor do elemento da lista clicado
        console.log(elemento.children[cont]);
        }
      }
    }