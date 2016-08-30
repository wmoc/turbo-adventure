import Scene from "./Scene";
import {Fork} from "./Fork";
export default class DeskScene extends Scene{
    constructor(){
        super();
        this.addChild(new Fork());
    }
}