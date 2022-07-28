const minhaTarefa = document.querySelector('input[type=text]'); //meu texto
const elemento = document.getElementById('minhaLista');

var ul = document.querySelector("#minhaLista");//minha lista existente


document.querySelector(".adicionar").addEventListener("click", () => {
    t = minhaTarefa.value;
    if (t != ""){
      var li = document.createElement("li"); //cria um elemento

      li.appendChild(document.createTextNode(t));
      ul.appendChild(li); //adiciona um elemento na ul
      minhaTarefa.value="";
      mapear(); //mapear sempre que adicionar elemento na lista
    }
    else{
      alert("Você deve adicionar uma tarefa!")
    }
  });

  document.querySelector(".limpar").addEventListener("click", () => {
    while(minhaLista != "" ){
        ul.removeChild(ul.lastChild);
    }
  });
    
    function mapear(){ // Função que mapeia a lista
      for(let cont=0; cont < elemento.childElementCount; cont++){
        if(elemento.children[cont].style.textDecoration == "line-through"){

          elemento.children[cont].onclick = function(){
            elemento.children[cont].style.textDecoration = "none";
          }
        }
        else{
          elemento.children[cont].onclick = function(){
            elemento.children[cont].style.textDecoration = "line-through" //altera a text decoration do elemento da lista clicado para riscada
          }
        }
      
      }
    }