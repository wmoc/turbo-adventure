import GameObject from "./GameObject";
export class Fork extends GameObject {
    draw(camera) {
        camera.context.beginPath();
        camera.context.arc(this.position.x * camera.RtoV, this.position.y * camera.RtoV, 10 * camera.RtoV, 0, Math.PI, false);
        camera.context.closePath();
        camera.context.fillStyle = 'red';
        camera.context.fill();
        camera.context.strokeStyle = "#123456";
        camera.context.stroke();
        console.log(this.position)
    }
}