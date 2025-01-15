//Sistema de ventas en JS
// Creacion de la clase productos


class Productos {
    static contadorProductos = 0;
    //Modificador static
    //Se utiliza para acceder directamente a traves de la clase

    //los metodos o propiedades no requieren que se creen una instancia de la clase para ser utilizadas
    //Se directamente a traves de la clase
constructor(nombre, precio, categoria){
    if(precio<0){
        error.log("El precio no puede ser negativo");
        return
    }
    this.idProducto = ++Productos.contadorProductos;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria=categoria;
}
getProducto(){
    return this.idProducto;
}
getPrecio(){
    return this.precio;
}
getNombre(){
    return this.nombre;
}
setPrecio(precio){
    this.precio = precio;
}
setNombre(nombre){
    this.nombre = nombre;
}

toString(){
    return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio}`;
}


}


class Orden {
    static contadorOrdenes = 0;

    static  get MAX_PRODUCTOS(){ // cuando se trabaja con constnantes se recomeinda en mayusculas, get se utiliza para acceder a la constante
        return 5;
    }
    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductos=0;
        //this.productos[this.contadorProductos++] = producto;
    }
    

    agregarProducto(producto){
        if(this.productos.length < Orden.MAX_PRODUCTOS){
            this.productos.push(producto);
            //Otra sintaxis
            //this.productos[this.contadorProductos++] = producto;
        }else{
            console.log("No se pueden agregar mas productos a la Orden");
        }
    }

    disminuirProducto(producto){
        if(this.productos.length > 0){
            this.productos.pop(producto);
            //Otra sintaxis
            //this.productos[this.contadorProductos++] = producto;
        }else{
            console.log("No se pueden disminuir mas productos a la Orden");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        this.productos = this.productos.map(producto => {
            if (producto.categoria === "Electronica") {
              producto.setPrecio(producto.getPrecio() - (producto.getPrecio() * 0.1));
            }
            return producto;
          });
        for(const producto of this.productos){
            totalVenta += producto.getPrecio(); //totalVenta = totalVenta + producto.getPrecio();
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(const producto of this.productos){
            productosOrden += producto.toString();
        }
        console.log(`Orden: ${this.idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

    listarProductos(){
        this.productos.sort((a,b) => b.getPrecio() - a.getPrecio());
    }
    calcularImpuestos(){
        return this.calcularTotal() * 0.12;
    }

}
//Stock disminuya
//Descuento por categoria
//Crear una propiedad categoria en la clase producto
//Los productos de la categoria Electronica de tener un descuento del 10 % a calularl el total de su venta
//Implementar un metodo calcularImpuestos()
//Listar Productos por precio Descendiente

//Asegurese que los precios no puedan ser negativos al establecer en la clase producto



let producto1 = new Productos("Monitor", 500, "Electronica");
let producto2 = new Productos("Teclado", 100, "Electronica");
let producto3 = new Productos("Mouse", 50, "Electronica");
console.log(producto1);
console.log(producto2);
console.log(producto3);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();








/*
class Calculadora {
    static sumar(a, b) {
        return a + b;
}
}

console.log(Calculadora.sumar(1, 2));  
//No se puede acceder directamente a traves de la instancia  con static
const calculadora= new Calculadora();
//console.log(calculadora.sumar(1, 2)); 

class Contador{
    static totalInstancias = 0;
    constructor(){
        Contador.totalInstancias++;
    }
    static mostrarTotalInstancias(){
        console.log(Contador.totalInstancias);
    }
}

const contador1 = new Contador();
const contador3 = new Contador();
Contador.mostrarTotalInstancias();
*/
