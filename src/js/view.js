import templatePlanets from './templatePlanets.js';

export default class View {
	
	constructor(handlers) {
		this.containerWestSide = document.querySelector(".side--west");
		this.containerWestSide.addEventListener("click", handlers.onClickPlanet);
	}

	renderPlanet(data) {
		let fragmentPlanet = document.createDocumentFragment();

		for (let i = 0; i < data.length; i++){
			let planetItem = templatePlanets(data[i].name);
			fragmentPlanet.appendChild(planetItem);
		}

		this.containerWestSide.appendChild(fragmentPlanet);
	}

}