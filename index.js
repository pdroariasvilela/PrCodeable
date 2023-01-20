
let ListaNotas = [
{nota:'Una variable puede declararse usando let o const'},
{nota:'Un arreglo es un conjunto de datos ordenados'},
]


function cantidadNotas(){
    for( let i= 0 ; i < ListaNotas.length ; i++){ 
    let element = ListaNotas[i]
    console.log(`${i}.- ${element.nota}`)
  }
}

function Listado(){
  console.clear()
  console.log(`Usted tiene ${ListaNotas.length} notas`)
  console.log(cantidadNotas());
  console.log(`------------------------
  1. Crear nota
  2. Editar nota
  3. Eliminar nota`);
}

// FUNCIONES

function añadirNota(add){
  let addNota = {
    nota: add
  }
  ListaNotas.push(addNota)
}


function editarNota( numberEdit , edit){
  ListaNotas[numberEdit].nota = edit 
}

function eliminarNota(i) {
  ListaNotas.splice(i, 1);
}

//---Elecciones

while(true){

  Listado()
  let eleccion = prompt('Elige una opción')
  if(eleccion == 1){
    add = prompt('Escriba')
    añadirNota(add)

  } else if(eleccion == 2){
    let numberEdit = prompt('Que nota desea editar?')
    let edit = prompt('Escribe la nueva nota')
    editarNota(numberEdit, edit)

  } else if(eleccion == 3){
     i = prompt('Que nota desea eliminar')
     eliminarNota(i)
     console.log(cantidadNotas())

  }else if (eleccion === null) {
    console.log("Gracias por usar Notas");
    break;

}}


//actualizar


























// function enumerador(){
//   let index = 0
//   for( index ; index < ListaNotas.length ; index++){ 
//     elemento = ListaNotas[index]
//     console.log(`${elemento.length}`)
//   }
// }


// console.log(`Usted tiene ${enumerador()} notas`)












