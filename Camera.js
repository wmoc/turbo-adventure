import GameObject from "./GameObject";
import {eventManager} from "./EventManager";

/**
 * TODO: take into account Z axis
 * TODO: camera angle
 */

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
        this.squareOfHalfOfDiagonal = (this.vH / 2) * (this.vH / 2) + (this.vW  /2) * (this.vW / 2);

        this.body.width = this.vW;
        this.body.height = this.vH;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawImageAndBody(image, body) {
        if(!this.shouldIRender(body)){
            return;
        }
        //move to center of image, because rotation in js is strange
        this.context.save();
        this.context.translate(body.rX(this), body.rY(this));
        this.context.rotate(body.angle + this.body.angle);
        this.context.drawImage(image,
            -body.rWidth(this) / 2,
            -body.rHeight(this) / 2,
            body.rWidth(this),
            body.rHeight(this));

        this.context.restore();
    }

    shouldIRender(body){
        return this.squareOfHalfOfDiagonal + body.width * body.width + body.height * body.height
            > (this.body.x - body.x) * (this.body.x - body.x) +  (this.body.y - body.y) * (this.body.y - body.y);
    }

    follow(body){
        this.followedBody = body;
    }

    unfollow(){
        this.followedBody = undefined;
    }

    update(){
        if(this.followedBody != undefined){
            this.body.x = this.followedBody.x;
            this.body.y = this.followedBody.y;
            // this.body.angle = this.followedBody.angle;
        }
    }
}