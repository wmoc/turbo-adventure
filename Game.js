class Game {
    constructor() {
        this.scenes = [];
        this.states = {
            PAUSE: 0,
            ACTIVE: 1
        };
        this.state = this.states.ACTIVE;
    }

    scene() {
        return this.scenes.last();
    }

    setScene(scene) {
        this.scenes.push(scene);
    }

    init() {

    }

    run() {
        setInterval(this.handleUpdate.bind(this), 100 / 120);
        window.requestAnimationFrame(this.render.bind(this));
    }

    render() {
        // if (this.state == this.states.PAUSE) {
        //     return;
        // }

        this.camera.clear();
        this.scene().render(this.camera);


        window.requestAnimationFrame(this.render.bind(this));
    }

    handleUpdate(){
        /**
         * TODO fixed ticks
         */
        this.scene().handleUpdate();
        this.camera.update();
    }

    setCamera(camera) {
        this.camera = camera;
    }

    // pause() {
    //     this.state = this.states.PAUSE;
    // }
}

export let game = new Game();