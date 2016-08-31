export class Vector{
    constructor(x, y){
        this.x = 0;
        this.y = 0;

        if(x != undefined){
            this.x = x;
        }
        if(y != undefined){
            this.y = y;
        }
        console.log(this)
    }
}