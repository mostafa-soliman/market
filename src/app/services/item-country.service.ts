import { Injectable } from '@angular/core';
import { IitemCountry } from '../interface/iitem-country';

@Injectable({
  providedIn: 'root'
})
export class ItemCountryService {
  itemCountry: IitemCountry[];

  constructor() {

  this.itemCountry=[
    {
      id:'q1',
      name:'new zealand chocolate',
      discretion:'Bold and flavorful, made with a mix of spices and exotic ingredients. Explore the richness and diversity of Spanish chocolate.',
      photoUrl:'https://img.freepik.com/premium-psd/3d-chocolate-new-zealand-flag-rendering-right-view_391890-21972.jpg?w=740'

    },
    {
      id:'q2',
      name:'monaco  chocolate',
      discretion:'Luxurious, decadent and sophisticated, crafted with precision and excellence. Indulge in the smooth, creamy taste of Swiss chocolate.',
      photoUrl:'https://img.freepik.com/premium-psd/3d-chocolate-monaco-flag-rendering-front-view_391890-21937.jpg?w=740'

    },
    {
      id:'q3',
      name:'Italian chocolate',
      discretion:'Decadent, indulgent, and rich, made with the finest cocoa and natural ingredients. Taste the warmth, passion, and luxury of Italy.',
      photoUrl:'https://img.freepik.com/premium-psd/3d-chocolate-italy-flag-rendering-left-view_391890-21839.jpg?w=740'

    },

    {
      id:'q4',
      name:'Croatian chocolate',
      discretion:'Artisanal and unique, made with locally-sourced ingredients and a passion for tradition. Discover the hidden gem of Croatian chocolate.',
      photoUrl:'https://img.freepik.com/premium-psd/3d-chocolate-croatia-flag-rendering-front-view_391890-22312.jpg?w=740'

    },

  ]

}

getAllItemQ():IitemCountry[] {
  return this.itemCountry;
}

}
