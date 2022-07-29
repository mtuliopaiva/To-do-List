const minhaTarefa = document.querySelector('input[type=text]'); //meu texto
const lista = document.getElementById('minhaLista');




document.querySelector(".adicionar").addEventListener("click", () => {
  
    t = minhaTarefa.value;
    if (t != ""){
      var li = document.createElement("li"); //cria um lista

      li.appendChild(document.createTextNode(t));
      lista.appendChild(li); //adiciona um lista na ul
      minhaTarefa.value="";
      mapear(); //mapear sempre que adicionar lista na lista
    }
    else{
      alert("Você deve adicionar uma tarefa!")
    }
  });

  document.querySelector(".limpar").addEventListener("click", () => {
    while(minhaLista != "" ){
        lista.removeChild(lista.lastChild);
    }
  });

    function mapear(){ // Função que mapeia a lista
      for(let cont=0; cont < lista.childElementCount; cont++){
        if(lista.children[cont].style.textDecoration == "line-through"){
          lista.children[cont].onclick = function(){
            lista.children[cont].style.textDecoration = "none";
          }
        }
        else{
          lista.children[cont].onclick = function(){
            lista.children[cont].style.textDecoration = "line-through" //altera a text decoration do lista da lista clicado para riscada
          }
        }
      
      }
    }