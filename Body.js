import {Vector} from "./Vector";
export class Body extends Vector{
    constructor(x, y, z, width, height, angle){
        super(x, y, z);
        if(angle != undefined){
            this.angle = angle;
        }else{
            this.angle = 0;
        }
        if(width != undefined){
            this.width = width;
        }else{
            this.width = 0;
        }
        if(height != undefined){
            this.height = height;
        }else{
            this.height = 0;
        }
    }


    rX(camera){
        return (this.x - camera.body.x + camera.body.width / 2) * camera.RtoV;
    }
    rY(camera){
        return (this.y - camera.body.y + camera.body.height / 2) * camera.RtoV;
    }

    rWidth(camera){
        return this.width * camera.RtoV;
    }

    rHeight(camera){
        return this.height * camera.RtoV;
    }
}