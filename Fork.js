import GameObject from "./GameObject";
import {imageManager} from "./ImageManager";
import {game} from "./Game";
export class Fork extends GameObject {
    constructor(body) {
        super(body);
        this.image = imageManager.get(imageManager.images.FORK);
    }

    draw(camera) {
        camera.drawImageAndBody(this.image, this.body);
    }

    // TODO: temporary
    turnLeft(){
        this.angularMomentum += 0.02;
        console.log(this.body.angle)
    }

    // TODO: temporary
    turnRight(){
        this.angularMomentum += -0.02;
    }

    // TODO: true physics
    update(){
        this.body.angle += this.angularMomentum;
        this.body.x += this.velocity * Math.sin(this.body.angle);
        this.body.y += this.velocity * -Math.cos(this.body.angle);
    }

}