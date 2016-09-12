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
        this.body.angle += 4.1;
    }
}