interface TakePhoto {
    cameraMode: string,
    filter: string
    burst: number
}

interface Stroy {
    createStory (): void
}

class Instagram implements TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}


class Youtube implements TakePhoto,Stroy {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Story Was Created");
    }
}

export {}