//creacion de la lista vacia
let amigos = []

//llamamos a la funcion actualizar lista
actualizarLista()

//funcion agregar amigo
function agregarAmigo(){
    let amigo= document.querySelector('input')
    if(amigo.value ===""){
        alert("Rellene el campo")
    }else{
        amigos.push(amigo.value);
        console.log(amigos)
        amigo.value=""
    }
}

//funcion actualizar lista
function actualizarLista(){
    let lista= document.getElementById('listaAmigos')
    lista.innerHTML=""
    for(let i=0; i< amigos.length;i++){
        let li=document.createElement('li')
        li.textContent= amigos[i]
        lista.appendChild(li)
        
    }
    
}

//funcion sortear amigo
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
