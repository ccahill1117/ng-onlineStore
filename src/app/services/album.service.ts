import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { ALBUMS } from '../models/mock-albums';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  getAlbums() {
    return ALBUMS;
    console.log(ALBUMS);
  }

  constructor() { }

  getAlbumById(albumId: number) {
    // let errorAlbum:Album =
    // new Album({title:"that's weird", artist:"you got",
    // description:"some sort of error", id:0});

    for(let i = 0; i <= ALBUMS.length - 1; i++) {
      if(ALBUMS[i].id === albumId) {
        return ALBUMS[i];}
      // else {return errorAlbum}
      }
    }
}
