const button = document.querySelector('#button');

button.addEventListener('click',sendData);

console.log(button);

function sendData(e){
  e.preventDefault();
  // document.location.href='../../buscador.html';
}