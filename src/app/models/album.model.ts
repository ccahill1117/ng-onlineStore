export class Album {
  title: string = '';
  artist: string = '';
  description: string = '';
  id: number;

  constructor(public params) {
    this.title = params.title;
    this.artist = params.artist;
    this.description = params.description;
    this.id = params.id;

  }
}
