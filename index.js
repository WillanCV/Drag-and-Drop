const parrafos = document.querySelectorAll(".parrafo")
console.log(parrafos)
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo =>{
  
  parrafo.addEventListener("dragstart", evento =>{
    console.log("Arrastrando el parrafo: " + parrafo.innerText)
    parrafo.classList.add("dragging")
    evento.dataTransfer.setData("id", parrafo.id )

    const elemento_fantarma = document.querySelector(".imagen-fantasma")
    evento.dataTransfer.setDragImage(elemento_fantarma,0,0)
    
  })

  parrafo.addEventListener("dragend", () => {
    console.log("termine el arrastre")
    parrafo.classList.remove("dragging")
  })
  
})
secciones.forEach(seccion =>{
  seccion.addEventListener("dragover", evento =>{
    evento.preventDefault()
    evento.dataTransfer.dropEffect = "move"
   // console.log("Drag Over")
  })
  seccion.addEventListener("drop", evento =>{
    console.log("Drop")
    const id_parrafo = evento.dataTransfer.getData("id")
    console.log(id_parrafo)
    const parrafo = document.getElementById(id_parrafo)

    //tomando como hijo el elemento arrastrado
    seccion.appendChild(parrafo)
    
  })
  
})

//Eliminar elementos__________
const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})    