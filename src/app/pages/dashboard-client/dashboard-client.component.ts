import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  public annonces: string[] = [
    'Annonce1', 'Annonce2', 'Annonce3', 'Annonce4', 'Annonce5', 'Annonce6', 'Annonce7', 'Annonce8'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
