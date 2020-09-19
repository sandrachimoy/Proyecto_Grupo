//Añadir carrito

function anyadirCarrito() {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(this.getAttribute("marcador"));
  // Calculo el total
  calcularTotal();
  // Renderizamos el carrito
  renderizarCarrito();
}
