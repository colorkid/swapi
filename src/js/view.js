import templatePlanets from './templatePlanets.js';

export default class View {
	
	constructor(handlers) {
		this.containerWestSide = document.querySelector(".side--west");
		this.containerWestSide.addEventListener("click", handlers.onClickPlanet);
		this.containerEastSide = document.querySelector(".side--east");
	}

	renderPlanet(data) {
		let fragmentPlanet = document.createDocumentFragment();

		for (let i = 0; i < data.length; i++){
			let planetItem = templatePlanets(data[i].name);
			fragmentPlanet.appendChild(planetItem);
		}

		this.containerWestSide.appendChild(fragmentPlanet);
	}

	renderNameOfResident(name) {
		this.containerEastSide.innerHTML = `<div class="resident">
												<div class="resident__name">${name}</div>
												<div class="resident__next"></div>
											</div>`;
	}

}