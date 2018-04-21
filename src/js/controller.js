import View from './view.js';
import Model from './model.js';

export default class Controller {
	
	constructor(data) {
		this.data = data.results;
		this.view = new View({
			onClickPlanet: this._setOnClickPlanet.bind(this),
		});
		this.view.renderPlanet(this.data);
	}

	_setOnClickPlanet(event) {

		if(!event.target.classList.contains("planet")) return;

		for (let i = 0; i < this.data.length; i++){
			
			if(event.target.dataset.planet === this.data[i].name){
				this._getNameOfResident(this.data[i].residents[0]);
			}

		}

	}

	_getNameOfResident(apiUrl) {
		fetch(apiUrl)
	    .then(response => response.json())
	      .then(function(data) {
	      	console.log(data.name);
	      	this.view.renderNameOfResident(data.name);
	    }).catch (
	    response => {
	      this.view.renderNameOfResident("Uninhabited planet")
	    })
	}

}