import Scene from "./Scene";
import {Fork} from "./Fork";
import {Body} from "./Body";
export default class DeskScene extends Scene{
    constructor(){
        super();
        var i = 0;
        for (; i < 250; i++){
            var fork = new Fork(new Body(
                (Math.random() - 0.5) * 500,
                (Math.random() - 0.5) * 500,
                0,
                (Math.random()) * 4,
                (Math.random()) * 4,
                (Math.random()) * Math.PI * 2));
            fork.angularMomentum = 0;
            fork.velocity = Math.random() * 0;
            this.addChild(fork);
        }
    }

}