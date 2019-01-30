import { Component, OnInit } from '@angular/core';
// activated route contains info about route associated with a component
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {

  albumId: number = null;
  albumToDisplay: Album = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    })
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
