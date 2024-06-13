// Creación de la cabecera
const cabecera = document.createElement('header');
const navegacion = document.createElement('nav');
const nav = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
navegacion.className = 'navbar';

// Estilos, agregar a laos productos
cabecera.style.backgroundColor = 'lightgreen';
document.body.style.backgroundColor = "#f3dbc3";


// Agregar la cabecera al cuerpo del documento
document.body.appendChild(cabecera);

// Páginas
const links = ["Index", "Productos", "Contacto"];


// Recorrer las páginas y asignarles un href
for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    nav.appendChild(li);
}


//contenedor de productos
const divProducto = document.createElement('div');
document.body.appendChild(divProducto);