import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreOrderService {

  constructor() { }
  public aboutOrders: any[]= [
    {
      id: '1',
      image1: '../../assets/images/Easiest-Pizza_22-2_11.jpg',
      image2: '../../assets/images/download.jfif',
      image3: '../../assets/images/Easiest-Pizza_22-2_11.jpg',
      image4: '../../assets/images/download.jfif',
      company: 'Nash Dvor',
      phone: '+37498858585',
      type: 'resturant',
      zipCode: '5688',
      address: 'Nash Dvor Shara Talyan Street, Gyumri',
      client: '',
      clientPhone: '65464',
      balance: '0',
      buyDate: '14/12/2018',
      clientAddress: 'bjbj'
    },
    {
      id: '2',
      image1: '../../assets/images/download (1).jfif',
      image2: '../../assets/images/l-intro-1662064407.jpg',
      image3: '../../assets/images/download (1).jfif',
      image4: '../../assets/images/l-intro-1662064407.jpg',
      company: 'Tashir Pizza',
      phone: '+3798454545',
      type: 'resturant',
      zipCode: '5478',
      address: 'Shara Talyan Street, Gyumri',
      client: '',
      clientPhone: '654654',
      balance: '0',
      buyDate: '14/12/2019',
      clientAddress: 'bjbjasd'
    },
    {
      id: '3',
      image1: '../../assets/images/Salat-s-pecheniu-treski_siteWeb.jpg',
      image2: '../../assets/images/download (3).jfif',
      image3: '../../assets/images/Salat-s-pecheniu-treski_siteWeb.jpg',
      image4: '../../assets/images/download (3).jfif',
      company: 'Nash Dvor',
      phone: '+37498858585',
      type: 'resturant',
      zipCode: '5688',
      address: 'Nash Dvor Shara Talyan Street, Gyumri',
      client: '',
      clientPhone: '65464',
      balance: '0',
      buyDate: '14/12/2018',
      clientAddress: 'bjbj'
    },
    {
      id: '4',
      image1: '../../assets/images/download (2).jfif',
      image2: '../../assets/images/pasta-with-garlic-and-cheese-recipe-482004-hero-01-2f4a00f6c39c4f3bb1209eef8b17f9cd.jpg',
      image3: '../../assets/images/download (2).jfif',
      image4: '../../assets/images/pasta-with-garlic-and-cheese-recipe-482004-hero-01-2f4a00f6c39c4f3bb1209eef8b17f9cd.jpg',
      company: 'Nash Dvor',
      phone: '+37498858585',
      type: 'resturant',
      zipCode: '5688',
      address: 'Nash Dvor Shara Talyan Street, Gyumri',
      client: '',
      clientPhone: '65464',
      balance: '0',
      buyDate: '14/12/2018',
      clientAddress: 'bjbj'
    },
    {
      id: '5',
      image1: '../../assets/images/86147.png',
      image2: '../../assets/images/fri-1.webp',
      image3: '../../assets/images/86147.png',
      image4: '../../assets/images/fri-1.webp',
      company: 'Nash Dvor',
      phone: '+37498858585',
      type: 'resturant',
      zipCode: '5688',
      address: 'Nash Dvor Shara Talyan Street, Gyumri',
      client: '',
      clientPhone: '65464',
      balance: '0',
      buyDate: '14/12/2018',
      clientAddress: 'bjbj'
    }
  ]

  getById(id: number){
    return this.aboutOrders.find(p => p.id === id)
  }
}
