function agregarProducto() {
    let producto = document.getElementById("producto")
    let precio = document.getElementById("precio")
    let cantidad = document.getElementById("cantidad")
    let listaProductos = document.getElementById("detalleProductos")
    let preciocant = (precio.value * cantidad.value)

    let texto = producto.value.trim() + " - ₡" + precio.value.trim() + " x " +
        cantidad.value.trim() + " = " + " ₡" + preciocant

    if (texto !== '') {
        let item = document.createElement('li')
        item.textContent = texto
        item.setAttribute("subtotal", preciocant)
        listaProductos.appendChild(item)
        producto.value = ''
        precio.value = ''
        cantidad.value = ''
    }
}

function generarFactura() {
    let cliente = document.getElementById("cliente")
    let descuento = document.getElementById("descuento")
    let impuesto = document.getElementById("impuesto")
    let factura = document.getElementById("resumenFactura")

    let lista = document.getElementById("detalleProductos")

    let items = lista.getElementsByTagName("li")
    let subtotal = 0
    let detalle = ""

    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let valor = Number(item.getAttribute("subtotal"))
        subtotal = subtotal + valor
        detalle = detalle + item.textContent + "<br>"
    }

    let desc = subtotal * (descuento.value || 0) / 100
    let imp = subtotal * (impuesto.value || 0) / 100
    let total = (subtotal - desc + imp)

    let texto = "Cliente: " + cliente.value.trim() + "<br>" +
        "Detalle:" + "<br>" +
        detalle + "<br>" +
        "Subtotal: ₡" + subtotal + "<br>" +
        "Descuento (" + descuento.value.trim() + "%): -₡" + desc + "<br>" +
        "Impuesto (" + impuesto.value.trim() + "%): +₡" + imp + "<br>" +
        "Total a pagar: ₡" + total

    factura.innerHTML = texto
}