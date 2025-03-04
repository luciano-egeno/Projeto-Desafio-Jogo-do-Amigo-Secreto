let amigos = []; // Array para armazenar os amigos
let listaChecada = false; // Variável para verificar se a lista de amigos foi checada
let inputElement = document.getElementById('amigo'); // Pega o input

document.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){	
        adicionarAmigo(); // Chama a função para adicionar o amigo
    }
})

function adicionarAmigo() {
   if(inputElement.value == ""){
       alert('Digite o nome do amigo a sortear');

   } else {
       amigos.push(inputElement.value); // Adiciona o valor do input no array
         inputElement.value = ''; // Limpa o input
         listaChecada = true; // Ativa a lista de amigos
        
   }

   listarAmigos(); // Chama a função para listar os amigos

}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos'); // Pega a ul
    lista.innerHTML = ''; // Limpa a ul

    for(let i = 0; i<amigos.length;i++){
        let nome = document.createElement('li'); // Cria um li
        nome.innerHTML = amigos[i]; // Adiciona o nome do amigo
        lista.appendChild(nome); // Adiciona o li na ul
    }

}

function sortearAmigo() {
  let lista = document.getElementById('listaAmigos'); // Pega a ul
  lista.innerHTML = ''; // Limpa a ul
  if (!listaChecada && amigos.length === 0) {
    alert('Adicione amigos antes de escolher um');

  } else {
    if (amigos.length === 0) {
        vazio();

    } else {
        let resultado = document.getElementById('resultado'); // Pega o resultado
        let sortear = Math.floor(Math.random() * amigos.length); // Sorteia um amigo
        let sorteio = amigos[sortear]; // Pega o amigo sorte
        resultado.innerHTML = sorteio 
        amigos.splice(sortear, 1); // Remove o amigo sorteado
    }
  }
}

function vazio() {
    alert("Acabaram-se os amigos, o jogo irá reiniciar!");
    let resultado = document.getElementById('resultado'); // Pega o resultado
    resultado.innerHTML = '';
    listaChecada = false;
}