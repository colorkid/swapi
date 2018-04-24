import View from './view.js';
import Model from './model.js';

export default class Controller {
	
	constructor(data) {
		this.data = data.results;
		this.view = new View({
			onClickPlanet: this._setOnClickPlanet.bind(this),
			onClickNextArrow: this._setOnClickNextArrow.bind(this)
		});
		this.view.renderPlanet(this.data);
		this.residentIndex;
		this.planetResidentRender;
		this.lengthOfResidentsOfPlanet;
		this.indexOfPlanet;
	}

	_setOnClickPlanet(event) {

		if(!event.target.classList.contains("planet")) return;

		for (let i = 0; i < this.data.length; i++){
			
			if(event.target.dataset.planet === this.data[i].name){
				this.indexOfPlanet = i;
				this._stepOnNextPlanet();
			}

		}

	}

	_setOnClickNextArrow(event) {
		if(!event.target.classList.contains("resident__next")) return;
		
		this.residentIndex++;

		if(this.lengthOfResidentsOfPlanet === this.residentIndex) {
			this.indexOfPlanet < this.data.length - 1 ? this.indexOfPlanet++ : this.indexOfPlanet = 0;
			this._stepOnNextPlanet();
		}

		else {
			this._getNameOfResident(this.planetResidentRender.residents[this.residentIndex]);
		}
	}

	_stepOnNextPlanet() {
		this.residentIndex = 0;
		this.lengthOfResidentsOfPlanet = this.data[this.indexOfPlanet].residents.length;
		this.planetResidentRender = this.data[this.indexOfPlanet];
		this._getNameOfResident(this.planetResidentRender.residents[this.residentIndex]);
	}

	_getNameOfResident(apiUrl) {
		fetch(apiUrl)
	    .then(response => response.json())
	      .then((data) => {
	      	this.view.renderNameOfResident(data.name, true);
	    }).catch((error) => {
	    	this.view.renderNameOfResident('Uninhabited planet', false);
	    	console.log(error.name);
		    console.log(error.message);
		    console.log(error.stack);
		});
	}

}

