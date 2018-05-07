//@flow
import indexScss from "vanilla/genericComponent/button/index.scss";
import styleInject from "style-inject";
import IComponent from "vanilla/genericComponent/IComponent";

let neverInject:boolean = true;
export default class Button extends IComponent {
	constructor() {
		super();
		if (neverInject) {
			styleInject(indexScss);
			neverInject = false;
		}
	}
}
