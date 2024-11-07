let botonrestaurantes = document.querySelector("#botonRestaurantes")
let botoncontacto = document.querySelector ("#botonContacto")
let botonproductos = document.querySelector ("#botonProductos")
let restaurantes = document.querySelector("#restaurantes")
let productos = document.querySelector ("#productos")
let contacto = document.querySelector("#contacto")
productos.style.display = 'none'
restaurantes.style.display = 'none'
contacto.style.display= "none"

botonrestaurantes.onclick = function(){
    //ACA ESCRIBIMOS LAS INSTRUCCIONES A EJECUTAR
    restaurantes.style.display = ''
    productos.style.display = 'none'
    contacto.style.display ="none"
}
botonproductos.onclick = function(){
    //ACA ESCRIBIMOS LAS INSTRUCCIONES A EJECUTAR
    restaurantes.style.display = 'none'
    productos.style.display = ''
    contacto.style.display ="none"
}
botoncontacto.onclick = function(){
    //ACA ESCRIBIMOS LAS INSTRUCCIONES A EJECUTAR
    contacto.style.display = ''
    productos.style.display = 'none'
    restaurantes.style.display = 'none'
}