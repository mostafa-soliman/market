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
          photoUrl:
            'https://www.lindt.ca/media/catalog/product/c/e/ce9c88c94052d42dbf0afa2adfe6918f764de99d08664fa49ee7e02128886c73.jpeg?quality=80&fit=bounds&height=260&width=260&canvas=260:260',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '1',
          name: 'Snickers Minis',
          price: 6,
          photoUrl:
            'http://cdn.shopify.com/s/files/1/0567/3808/7091/products/snickersminis_1200x1200.png?v=1675402038',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '2',
          name: 'snickers',
          price: 4,
          photoUrl:
            'https://www.monmoreconfectionery.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/n/snickers-4-pack-snacksize.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '3',
          name: 'bounty',
          price: 3,
          photoUrl:
            'https://b1.kannurdutyfree.in//pub/media/catalog/product/1/2/12000053.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '4',
          name: 'bubbly',
          price: 2.5,
          photoUrl:
            'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622210779854.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '5',
          name: 'daityMlik',
          price: 7,
          photoUrl:
            'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622210609915_11.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '6',
          name: 'digestev',
          price: 7,
          photoUrl:
            'https://cdn.shopify.com/s/files/1/0339/7792/5764/products/BO-15033_T1.png?v=1676468216',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '7',
          name: 'freska',
          price: 5,
          photoUrl:
            'https://cdn.shopify.com/s/files/1/0558/0357/6507/products/image_0300932e-4004-4135-b94b-de5ceab7d325.png?v=1650268385',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '8',
          name: 'galaxy',
          price: 5,
          photoUrl:
            'https://www.logicvending.co.uk/wp-content/uploads/2018/05/galaxy-vending-pouch-visual-2014_1024x1024-1200x1200.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '9',
          name: 'kinder',
          price: 6,
          photoUrl:
            'https://www.kinder.com/eg/sites/kinder_eg/files/2020-08/maxi-packshot-11.png?t=1679997380',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '10',
          name: 'm&ms',
          price: 8,
          photoUrl:
            'https://cdn.media.amplience.net/i/marsmmsprod/ct2033_img_01_1000110866_4010001455_4010001456?%24i%24=&w=576&h=576',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '11',
          name: 'milka',
          price: 4,
          photoUrl:
            'http://cdn.shopify.com/s/files/1/0429/0078/3253/products/Milka_Bubbly_Alpine_Milk_Chocolate_90_Gram_1200x1200.png?v=1596390693',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '12',
          name: 'twix',
          price: 6,
          photoUrl:
            'https://www.twix.com/sites/g/files/fnmzdf236/files/migrate-product-files/pm57alsea7mspqhhgfuf.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '13',
          name: 'molto',
          price: 2,
          photoUrl:
            'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/6/2/6223000496367_1.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '14',
          name: 'moro',
          price: 3,
          photoUrl:
            'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622201464271_1.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '15',
          name: 'oreo',
          price: 2,
          photoUrl:
            'https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article7858126.ece/ALTERNATES/s1200/0_image00627.png',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '16',
          name: 'trapa',
          price: 9,
          photoUrl:
            'https://cdn.shopify.com/s/files/1/0368/8785/5243/products/66249_800x.png?v=1607453496',
          quantity: 1,
          isInCart: false,
        },
        {
          id: '17',
          name: 'nutella',
          price: 1,
          photoUrl:
            'https://www.hmart.com/media/catalog/product/cache/0c75b0d6b380af6dca3ec180c127a709/9/8/980089500.png',
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
    this.addItemsToStorge();
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

  removeAllItemForCart() {
    for (let item of this.items) {
      item.isInCart = false;
      item.quantity = 1; //reset quantity to 1

    }
    this.addItemsToStorge();
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
