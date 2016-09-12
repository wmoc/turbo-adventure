export class Vector{
    constructor(x, y, z){
        this.x = 0;
        this.y = 0;
        this.z = 0;

        if(x != undefined){
            this.x = x;
        }
        if(y != undefined){
            this.y = y;
        }
        if(z != undefined){
            this.z = z;
        }
    }
}