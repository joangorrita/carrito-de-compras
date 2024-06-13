// llamados
const headerConteiner= document.getElementsByClassName("headerConteiner");

const navbar= document.getElementsByClassName("navbar");

const navbarA= document.getElementsByClassName("navbarA");

const main= document.getElementsByClassName("main");



const products = [
    {id: 1, name: "Camiseta", price: 10080},
    {id: 2, name: "Short", price: 17000},
    {id: 3, name: "Zapatilla", price: 28000},
    {id: 4, name: "Botin", price: 9800},
    {id: 5, name: "Buzo", price: 12800},
    {id: 6, name: "Campera", price: 40080},
]

let cart = loadCartFromLocalStorage();

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Producto no encontrado");
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.quantity * product.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            totalPrice: quantity * product.price
        });
    }

    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';      //         Limpiar la lista 
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id}, 1)">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});






// //datos de los productos
// class Producto {
//     constructor(id, nombre, precio, cantidad) {
//         this.id = id;
//         this.nombre = nombre.toUpperCase();
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }

//     sumarIva() {
//         const IVA = 1.21;
//         this.precio *= IVA;
//     }
// }

// const lista = [];


// lista.push( new Producto (1,"Lenteja", 250, 25));
// lista.push( new Producto (2,"Harina", 300, 15));
// lista.push( new Producto (3,"Arveja", 150, 17));



// //  total del stock
// const totalStock = lista.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

// // lista de precios
// function obtenerPrecios() {
//     return lista.map(producto => producto.precio);
// }

// console.log(obtenerPrecios());

// // comparoel precio ingresado por el usuario con el total  stock
// function compararPrecioUsuario() {
//     let valorUsuario;
//     while (true) {
//         const input = prompt("Ingrese su cantidad de deinero:");
//         valorUsuario = parseFloat(input);
        
//         if (!isNaN(valorUsuario)) {
//             break; 
//         }
        
//         alert("Por favor ingrese un numero");
//     }
    
//     if (valorUsuario > totalStock) {
//         alert(`El valor ingresado (${valorUsuario}) alcanza para cpmprar (${totalStock}).`);
//     } else if (valorUsuario < totalStock) {
//         alert(`El valor ingresado (${valorUsuario}) no es suficiente (${totalStock}).`);
//     } else {
//         alert(`El valor ingresado (${valorUsuario}) alcaanza justo con el dinero (${totalStock}).`);
//     }
// }


// //compararPrecioUsuario();


// //saco por correciones

// // const productos = [
// //     {
// //         id: 1,
// //         nombre: "Arroz",
// //         precio: 250,
// //         cantidad: 4
// //     },
// //     {
// //         id: 2,
// //         nombre: "Fideo",
// //         precio: 200,
// //         cantidad: 4
// //     },
// //     {
// //         id: 3,
// //         nombre: "Lenteja",
// //         precio: 150,
// //         cantidad: 1
// //     },
// //     {
// //         id: 4,
// //         nombre: "Poroto",
// //         precio: 50,
// //         cantidad: 3
// //     },
// //     {
// //         id: 5,
// //         nombre: "Alubia",
// //         precio: 50,
// //         cantidad: 5
// //     },
// //     {
// //         id: 6,
// //         nombre: "Arroz",
// //         precio: 50,
// //         cantidad: 4
// //     },
// // ];


// // for (const producto of productos) {
// //     const { id, nombre, precio, cantidad } = producto;
// //     const nuevoProducto = new Producto(id, nombre, precio, cantidad);
// //     nuevoProducto.sumarIva();
// //     lista.push(nuevoProducto);
// // }