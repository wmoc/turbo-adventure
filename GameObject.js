import {Body} from "./Body";
export default class GameObject {

    constructor(body) {
        if(body != undefined){
            this.body = body;
        }else{
            this.body = new Body();
        }

        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
        child.parent = this;
    }

    removeChild(child) {
        this.children.splice(this.children.indexOf(child), 1);
        child.parent = undefined;
    }

    render(camera) {
        if (this.draw != undefined) {
            this.draw(camera);
        }

        this.children.forEach(function (child) {
            child.render(camera);
        });
    }
}