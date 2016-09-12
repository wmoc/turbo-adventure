class ImageManager{
    constructor(){
        this.images = {
            FORK: 'assets/fork.png'
        };

        this.loadedImages = [];

        this.loadAllImages();
    }

    loadAllImages(){
        for(var key in this.images){
            this.load(this.images[key]);
        }
    }

    /**
     * TODO maybe do something with onload callback
     * @param fileName
     */

    load(fileName) {
        if(this.loadedImages[fileName] == undefined){
            this.loadedImages[fileName] = new Image();
            this.loadedImages[fileName].src = fileName;
        }
    }
    
    get(fileName){
        this.load(fileName);
        return this.loadedImages[fileName];
    }
}

export let imageManager = new ImageManager();