
// Abstract Clasess could create object of them own 
// but the help to define class who are inheriting them to get better structure 

abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void
    getReelTime(): number{
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){ 
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}

const har = new Instagram("test","Test",3);
har.getReelTime()