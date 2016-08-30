export default class GameObject {
    constructor() {
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