import GameObject from "./GameObject";
class EventManager extends GameObject {
    constructor() {
        super();
        this.Events = {
            RESIZE: 0,
            KEYLEFT_DOWN: 1,
            KEYLEFT_UP: 2,
            KEYRIGHT_DOWN: 3,
            KEYRIGHT_UP: 4
        };

        this.listeners = [];

        window.onresize = function () {
            this.fireEvent(this.Events.RESIZE);
        }.bind(this);

        this.keysPressed = [];

        window.onkeydown = function (event) {
            switch (event.keyCode) {
                case 37:
                    if (this.keysPressed[this.Events.KEYLEFT_DOWN] == undefined) {
                        this.keysPressed[this.Events.KEYLEFT_DOWN] = true;
                        this.fireEvent(this.Events.KEYLEFT_DOWN);
                    }
                    return;
                case 39:
                    if (this.keysPressed[this.Events.KEYRIGHT_DOWN] == undefined) {
                        this.keysPressed[this.Events.KEYRIGHT_DOWN] = true;
                        this.fireEvent(this.Events.KEYRIGHT_DOWN);
                    }
                    return;
            }
        }.bind(this);
        window.onkeyup = function (event) {
            switch (event.keyCode) {
                case 37:
                    if (this.keysPressed[this.Events.KEYLEFT_DOWN] == true) {
                        delete this.keysPressed[this.Events.KEYLEFT_DOWN];
                        this.fireEvent(this.Events.KEYLEFT_UP);
                    }
                    return;
                case 39:
                    if (this.keysPressed[this.Events.KEYRIGHT_DOWN] == true) {
                        delete this.keysPressed[this.Events.KEYRIGHT_DOWN];
                        this.fireEvent(this.Events.KEYRIGHT_UP);
                    }
                    return;
            }
        }.bind(this);
    }

    registerListener(event, callback) {
        if (this.listeners[event] != undefined) {
            this.listeners[event].push(callback);
        } else {
            this.listeners[event] = [callback];
        }
    }


    fireEvent(event) {
        if (this.listeners[event] != undefined) {
            this.listeners[event].forEach(function (callback) {
                callback();
            });
        }
    }
}

export let eventManager = new EventManager();