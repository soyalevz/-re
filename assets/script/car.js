

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector ('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const btnVaciar = document.querySelector('#vaciarCarrito')

let carrito 
const carritoEnLS = JSON.parse(localStorage.getItem('carrito') )
  



coffee.forEach((item) => {
  const div = document.createElement('div')
  div.classList.add('producto')

  div.innerHTML = `
  <img  src=${item.img} alt="espresso-simple">
  <h3>${item.nombre}</h3>
  <p>${item.desc}.</p>
  <p class="precioProducto">Precio: ${item.precio}</p>
  <button onclick="agregarAlCarrito(${item.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  
   `
   productosContainer.append(div)
})



const agregarAlCarrito = (id) => {
      const item = coffee.find ((producto) => producto.id === id)
      carrito.push(item)

      localStorage.setItem('carrito', JSON.stringify(carrito))

     console.log(carrito)
     renderCarrito()
     renderCantidad()
     renderTotal()
}

const removeDelCarrito = (id) => {
  const item = carrito.find((producto) => producto.id === id)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)

  localStorage.setItem('carrito', JSON.stringify(carrito))

 
     renderCarrito()
     renderCantidad()
     renderTotal()
}

const vaciarCarrito = () => {
   carrito = []
   
   localStorage.setItem('carrito', JSON.stringify(carrito))

   renderCarrito()
   renderCantidad()
   renderTotal()
} 

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
  carritoContenedor.innerHTML = ""
  
  carrito.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add ('productoEnCarrito')

    div.innerHTML = `
        
    <p>${item.nombre}</p>
    <p>Precio: ${item.precio}</p>
    <button onclick="removeDelCarrito(${item.id})"class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `

    carritoContenedor.append(div)

    
  })
}

const renderCantidad = () => {
  contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
  let total = 0 
  carrito.forEach((producto) => {
   total += producto.precio
  })

  precioTotal.innerText = total
}

if(carritoEnLS) {
  carrito = carritoEnLS

  renderCarrito()
  renderCantidad()
  renderTotal()
} else {
   carrito = []
}
