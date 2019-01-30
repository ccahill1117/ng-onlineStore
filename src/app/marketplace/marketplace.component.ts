import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent implements OnInit {

  albums: Album[];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };



// THIS CONSTRUCTOR PRIVATE ROUTER ENSURES EVERY INSTANCE OF MARKETPLACECOMPONENT HAS A ROUTER OBJECT!

  constructor(private router: Router) { }


  ngOnInit() {
  }

}
