import {Fork} from "./Fork";
import {eventManager} from "./EventManager";
export class Player extends Fork{
    constructor(body){
        super(body);

        eventManager.registerListener(eventManager.Events.KEYLEFT_DOWN, this.turnRight.bind(this));
        eventManager.registerListener(eventManager.Events.KEYLEFT_UP, this.turnLeft.bind(this));
        eventManager.registerListener(eventManager.Events.KEYRIGHT_DOWN, this.turnLeft.bind(this));
        eventManager.registerListener(eventManager.Events.KEYRIGHT_UP, this.turnRight.bind(this));
        this.angularMomentum = 0;
        this.velocity = 0.5;
    }

    update(){
        super.update();
    }
}