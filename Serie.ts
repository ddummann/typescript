class Serie {

    pos: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(pos: number, name: string, channel: string, seasons: number, 
        description: string, link: string, image: string) {
        this.pos = pos;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
