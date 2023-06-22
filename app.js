// Escribe tu código aquí.
const lista= document.getElementById("myList");
const inputTexto = document.getElementById("comparar");
const inputArray = document.getElementById("inputLits");
const boton = document.getElementById("boton");

var array2=[];

function comparar(){
    var texto = inputTexto.value;
    var array = inputArray.value;

    var arrayCorregido = array.split(",");

    arrayCorregido.forEach(e => {
        if(e.length>texto.length){
            array2.push(e);
        }
    });

    console.log(array2);

}

function pintarDom(){
    comparar();
    array2.forEach(e => {
        const list = document.createElement("li");
        list.innerHTML = `${e}`;
        lista.appendChild(list);
    });
}


boton.addEventListener("click",pintarDom);