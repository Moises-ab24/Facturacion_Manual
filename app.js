

function agregarProducto() {
    let listaProductos = document.getElementById("detalleProductos")

    let texto = producto.value.trim() + " - ₡" + precio.value.trim() + " x " + cantidad.value.trim() + " = " + " ₡" + (precio.value * cantidad.value)

    if (texto !== '') {
        let item = document.createElement('li');
        item.textContent = texto;
        listaProductos.appendChild(item);
        producto.value = '';
        precio.value = '';
        cantidad.value = '';
    }
}

function generarFactura() {
    let cliente = document.getElementById("cliente")
    let producto = document.getElementById("producto")
    let precio = document.getElementById("precio")
    let cantidad = document.getElementById("cantidad")
    let descuento = document.getElementById("descuento")
    let impuesto = document.getElementById("impuesto")
    let factura = document.getElementById("resumenFactura")


}