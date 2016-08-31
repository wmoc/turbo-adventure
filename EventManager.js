class EventManager{
    constructor(){
        this.Events = {
            RESIZE: 0
        };

        this.listeners = [];

        window.onresize = function(){
            this.fireEvent(this.Events.RESIZE);
        }.bind(this);
    }
    
    registerListener(event, callback){
        if(this.listeners[event] != undefined){
            this.listeners[event].push(callback);
        }else{
            this.listeners[event] = [callback];
        }
    }


    fireEvent(event){
        if(this.listeners[event] != undefined){
            this.listeners[event].forEach(function (callback) {
                callback();
            });
        }
    }
}

export let eventManager = new EventManager();