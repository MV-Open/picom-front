import { Component, OnInit } from '@angular/core';
import { AnnonceModel } from 'src/app/model/annonce.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  annonces: AnnonceModel[] = [
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    },
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    },
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    },
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    },
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    },
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    },
    {
      contenu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut accusantium iusto adipisci tempora ad illum. Provident culpa deleniti eveniet corporis reiciendis similique voluptates, tempore laudantium cupiditate. Animi, vel maiores.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
