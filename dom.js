function  mostrarTop10(){

let top10 = document.getElementsByClassName("peliculas");
    for (var i = 0; i < top10.length; i++){
        console.log(top10[i].innerText);
    } 

}

const arraySugeridos = [];

function sugerencia(){

    let sugerencia = prompt("Deposite su sugerencia :D");
    arraySugeridos.push(sugerencia);
    alert("Gracias! Se enviò su sugerencia.")
}

function misSugerencias(){

    console.log(arraySugeridos);

}


