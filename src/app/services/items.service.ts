import { Injectable } from '@angular/core';
import { Iitem } from '../interface/iitem';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items: Iitem[];
  constructor() {
    let Alls = this.getFromStorage();
    if (Alls) {
      this.items = Alls;
    } else {
      this.items = [
        {
          id: '0',
          name: 'landor',
          price: 5,
          photoUrl: 'assets/src/landor.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '1',
          name: 'minis',
          price: 6,
          photoUrl: 'assets/src/minis.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '2',
          name: 'snicher',
          price: 4,
          photoUrl: 'assets/src/snichers.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '3',
          name: 'bounty',
          price: 3,
          photoUrl: 'assets/src/bounty.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '4',
          name: 'bubbly',
          price: 2.5,
          photoUrl: 'assets/src/bubbly.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '5',
          name: 'daityMlik',
          price: 7,
          photoUrl: 'assets/src/daityMlik.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '6',
          name: 'digestev',
          price: 7,
          photoUrl: 'assets/src/digestev.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '7',
          name: 'freska',
          price: 5,
          photoUrl: 'assets/src/freska.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '8',
          name: 'galaxy',
          price: 5,
          photoUrl: 'assets/src/galaxy.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '9',
          name: 'kinder',
          price: 6,
          photoUrl: 'assets/src/kinder.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '10',
          name: 'm&ms',
          price: 8,
          photoUrl: 'assets/src/m&m.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '11',
          name: 'milka',
          price: 4,
          photoUrl: 'assets/src/milka.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '12',
          name: 'twix',
          price: 6,
          photoUrl: 'assets/src/twix.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '13',
          name: 'molto',
          price: 2,
          photoUrl: 'assets/src/molto.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '14',
          name: 'moro',
          price: 3,
          photoUrl: 'assets/src/moro.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '15',
          name: 'oreo',
          price: 2,
          photoUrl: 'assets/src/oreo.jpg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '16',
          name: 'trapa',
          price: 9,
          photoUrl: 'assets/src/trapa.jpeg',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '17',
          name: 'nutella',
          price: 1,
          photoUrl: 'assets/src/nutella.jpg',
          quantity: 1,
          isInCart: false,
        },
      ];
    }
  }

  isInCart(item: Iitem) {
    this.items = this.items.map((element) => {
      if (item.id === element.id) {
        element.isInCart = !item.isInCart;
      }
      return element;
    });
  }

  getAllItems(): Iitem[] {
    return this.items;
  }
  getFromStorage(): Iitem[] {
    // ('items') key in locul storge
    let AllItems = JSON.parse(localStorage.getItem('items')!);
    return AllItems;
  }

  addItemsToStorge() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  addNewItem(newItem: Iitem) {
    this.items.push(newItem);
    this.addItemsToStorge();
  }

  removeItemFromStorage(item: Iitem) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }
  clearStorage() {
    this.items = [];
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
