export default class Game{
    constructor(){
        this.scenes = [];
        this.animationFrameNumber = null;
    }

    scene(){
        return this.scenes.last();
    }

    setScene(scene) {
        this.scenes.push(scene);
    }

    init() {

    }

    run() {
        this.animationFrameNumber = window.requestAnimationFrame(this.render.bind(this));
    }

    render(){
        this.scene().render();



        this.animationFrameNumber = window.requestAnimationFrame(this.render.bind(this));
    }

}