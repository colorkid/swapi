export default function templatePlanets (planet) {
  	let planetTemplateItem = document.createElement("div");
  	planetTemplateItem.className = "planet";
  	planetTemplateItem.setAttribute("data-planet", planet);
  	planetTemplateItem.innerText = planet;
  	return planetTemplateItem;
}