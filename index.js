
let ListaNotas = [
{nota:'Una variable puede declararse usando let o const'},
{nota:'Un arreglo es un conjunto de datos ordenados'},
]

function cantidadNotas(){
  console.log(`Usted tiene ${ListaNotas.length} notas`)
    for( let i= 0 ; i < ListaNotas.length ; i++){ 
    element = ListaNotas[i]
    console.log(`${i}.- ${element.nota}`)
  }
}

console.log(cantidadNotas())
console.log('------------------------');
console.log(`
1. Crear nota
2. Editar nota
3. Eliminar nota`)


let eleccion = prompt('Elija una de las opciones')

console.clear()

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


if(eleccion == 1){
  add = prompt('Escriba')
  añadirNota(add)
  console.log(cantidadNotas())
}


if(eleccion == 2){
  let numberEdit = prompt('Que nota desea editar?')
  let edit = prompt('Escribe la nueva nota')
  editarNota(numberEdit, edit)
  console.log(cantidadNotas())
} 

if(eleccion == 3){
   i = prompt('Que nota desea eliminar')
   eliminarNota(i)
   console.log(cantidadNotas())

}

//actualizar


























// function enumerador(){
//   let index = 0
//   for( index ; index < ListaNotas.length ; index++){ 
//     elemento = ListaNotas[index]
//     console.log(`${elemento.length}`)
//   }
// }


// console.log(`Usted tiene ${enumerador()} notas`)












