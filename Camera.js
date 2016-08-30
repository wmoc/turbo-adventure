import GameObject from "./GameObject";
export class Camera extends GameObject {
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
}