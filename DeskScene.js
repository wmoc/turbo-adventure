import Scene from "./Scene";
import {Fork} from "./Fork";
import {Vector} from "./Vector";
export default class DeskScene extends Scene{
    constructor(){
        super();
        this.addChild(new Fork(new Vector(50, 50)));
        this.addChild(new Fork(new Vector(20, 20)));
    }
}