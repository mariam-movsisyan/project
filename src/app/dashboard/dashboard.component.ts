import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public cards!: any
  public colors: string[] = ['cadetblue', 'green', 'red', 'cornflowerblue']
  constructor(private cardService: CardService) { 
    this.cards = cardService.data
    console.log(this.cards);
    
  }

  ngOnInit(): void {

  }


}
