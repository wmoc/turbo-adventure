import Scene from "./Scene";
import {Fork} from "./Fork";
import {Body} from "./Body";
export default class DeskScene extends Scene{
    constructor(){
        super();
        this.addChild(new Fork(new Body(9,7.5 , 0, 1, 1, 0)));
        this.addChild(new Fork(new Body(45,7.5 , 0, 1, 1, 0)));
        this.addChild(new Fork(new Body(45,7.5+24 , 0, 1, 1, 1)));
        this.addChild(new Fork(new Body(9,7.5+24 , 0, 1, 1, 1)));
    }
}