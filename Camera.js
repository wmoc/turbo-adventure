import GameObject from "./GameObject";
import {eventManager} from "./EventManager";

const VH = 100;
export class Camera extends GameObject {
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        eventManager.registerListener(eventManager.Events.RESIZE, this.onWindowResize.bind(this));

        this.onWindowResize();
    }

    onWindowResize() {
        this.calculateDimensions();

        this.canvas.setAttribute('width', this.canvas.clientWidth);
        this.canvas.setAttribute('height', this.canvas.clientHeight);
    }

    /**
     * R - real (dimension in pixels)
     * V - virtual (screen-agnostic, convenient value)
     */
    calculateDimensions() {
        var rW = this.canvas.clientWidth;
        var rH = this.canvas.clientHeight;
        this.HtoW = rH / rW;
        this.WtoH = rW / rH;
        this.VtoR = VH / rH;
        this.RtoV = rH / VH;
        this.vH = VH;
        this.vW = this.vH * this.WtoH;
    }
}