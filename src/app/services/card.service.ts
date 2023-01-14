import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public data: object[] = [
    {
      header: 'Header',
      title: 'Total Earned amount is',
      count: '3660',
      bgColor: 'cadetblue'
    },
    {
      header: 'Header',
      title: 'New orders count is',
      count: '26',
      bgColor: 'cadetblue'

    },
    {
      header: 'Header',
      title: 'On Way orders count is',
      count: '0',
      bgColor: 'cornflowerblue'
    },
    {
      header: 'Header',
      title: 'Driver count is',
      count: '0',
      bgColor: 'green'
    },
  ]

}
