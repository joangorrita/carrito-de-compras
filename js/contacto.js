const mainContact = document.getElementById('mainContact');
// const sectionForm= document.getElementById(`sectionForm`);
let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const edadForm = document.getElementById('edadForm');
const correoForm = document.getElementById('correoForm');
const numeroForm = document.getElementById('numeroForm');
const divContact = document.createElement('div');
const textContact = document.createElement('p');
const submitButton = document.getElementById("submitButton");

mainContact.appendChild(divContact);

miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    divContact.appendChild(textContact);
    textContact.innerHTML = `La Edad de ${nombreForm.value} es: ${edadForm.value} años. El correo es ${correoForm.value} y su numero es ${edadForm.value}`;
})


submitButton.addEventListener('mouseover', () => {
    submitButton.style.color = 'black';
    submitButton.style.backgroundColor = 'white';
})

submitButton.addEventListener('mouseout', () => {
    submitButton.style.color = 'white';
    submitButton.style.backgroundColor = 'black';
})
