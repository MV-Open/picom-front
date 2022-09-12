import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceModel } from 'src/app/model/annonce.model';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  annonces: AnnonceModel[] = [];

  constructor(private _annonceService: AnnonceService,
    private _route: Router) {
  }

  ngOnInit(): void {
    this._annonceService.recupererAnnonces().subscribe(annonce => {
      console.log(annonce);
      this.annonces = annonce;
    });
  }
}
