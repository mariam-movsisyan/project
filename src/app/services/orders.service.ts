import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  public order: object[] = [
    {
      id: 1,
      img: '../../assets/images/blank-profile-picture-973460_1280.webp',
      name: 'Tashir Pizza',
      date: '11/27/18, 4:11 PM',
      price: '5236 Ք',
      button: 'More'
    },
    {
      id: 2,
      img: '../../assets/images/Salat-s-pecheniu-treski_siteWeb.jpg',
      name: 'Gyumri Hayastan',
      date: '11/27/18, 4:04 PM',
      price: ' 310 Ք',
      button: 'More'
    },
    {
      id: 3,
      img: '../../assets/images/blank-profile-picture-973460_1280.webp',
      name: 'Tashir Pizza',
      date: '11/27/18, 4:01 PM',
      price: '476 Ք',
      button: 'More'
    },
    {
      id: 4,
      img: '../../assets/images/blank-profile-picture-973460_1280.webp',
      name: 'Tashir Pizza',
      date: '11/21/18, 5:23 PM',
      price: '3352 Ք',
      button: 'More'
    },
    {
      id: 5,
      img: '../../assets/images/Salat-s-pecheniu-treski_siteWeb.jpg',
      name: 'Gyumri Hayastan',
      date: '11/21/18, 4:33 PM',
      price: '1230 Ք',
      button: 'More'
    },
  ]
}
