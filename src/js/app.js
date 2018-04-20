import Controller from './controller.js';

function startApp() {
  fetch('https://swapi.co/api/planets')
    .then(response => response.json())
      .then(function(data) {
      	new Controller(data);
    }).catch (
    response => {
      console.log(response.name);
      console.log(response.message);
      console.log(response.stack);
    })
}

document.addEventListener("DOMContentLoaded", startApp);