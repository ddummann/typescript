export class Serie {

    pos: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(posID: number, nameID: string, channelID: string, seasonsID: number, 
        descriptionID: string, linkID: string, imageID: string) {
        this.pos = posID;
        this.name = nameID;
        this.channel = channelID;
        this.seasons = seasonsID;
        this.description = descriptionID;
        this.link = linkID;
        this.image = imageID;
    }
}
