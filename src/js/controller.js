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
				console.log(this.data[i].residents[0]);//0 - это первый песронаж с планеты
			}

		}

	}

	//осталось сделать метод который будет отправлять запрос к api на получение имени по url(this.data[i].residents[0])

}