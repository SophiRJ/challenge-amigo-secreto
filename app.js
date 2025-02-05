// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

actualizarLista()
function agregarAmigo(){
    let amigo= document.querySelector('input')
    if(amigo.value ===""){
        alert("Rellene el campo")
    }else{
        amigos.push(amigo.value);
        amigo.value=""
        
    }
}

function actualizarLista(){
    let lista= document.getElementById('listaAmigos')
    lista.innerHTML=""
    for(let i=0; i< amigos.length;i++){
        let li=document.createElement('li')
        li.textContent= amigos[i]
        lista.appendChild(li)
    }
}


function sortearAmigo(){
    if(amigos.length==0){
        alert("La lista esta vacia")
    }else{
        let aleatorio= Math.floor(Math.random()*amigos.length)
        let amigoSorteado = amigos[aleatorio]
        let elementoSorteo= document.getElementById('resultado')
        elementoSorteo.innerHTML=amigoSorteado
    }
}
