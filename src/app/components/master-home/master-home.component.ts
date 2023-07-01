import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Iitem } from 'src/app/interface/iitem';
import { IitemCountry } from 'src/app/interface/iitem-country';
import { ItemsService } from './../../services/items.service';
import { Router } from '@angular/router';
import { ItemCountryService } from 'src/app/services/item-country.service';

@Component({
  selector: 'app-master-home',
  templateUrl: './master-home.component.html',
  styleUrls: ['./master-home.component.css'],
})
export class MasterHomeComponent implements OnInit {
  items: Iitem[] = [];
  itemCountry: IitemCountry[] = [];

  constructor(
    private itemCountryService: ItemCountryService,
    private itemsService: ItemsService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.itemCountry = this.itemCountryService.getAllItemQ();



  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
      1199: {
        items: 1,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
  };

  goToPage() {
    this.router.navigateByUrl('/home');
  }

  imageObject: Array<object> = [
    {
      image:
        'https://www.lindt.ca/media/catalog/product/c/e/ce9c88c94052d42dbf0afa2adfe6918f764de99d08664fa49ee7e02128886c73.jpeg?quality=80&fit=bounds&height=260&width=260&canvas=260:260',
      thumbImage:
        'https://www.lindt.ca/media/catalog/product/c/e/ce9c88c94052d42dbf0afa2adfe6918f764de99d08664fa49ee7e02128886c73.jpeg?quality=80&fit=bounds&height=260&width=260&canvas=260:260',
      alt: 'alt of image',
      title: 'landor',
    },
    {
      image:
        'http://cdn.shopify.com/s/files/1/0567/3808/7091/products/snickersminis_1200x1200.png?v=1675402038',
      thumbImage:
        'http://cdn.shopify.com/s/files/1/0567/3808/7091/products/snickersminis_1200x1200.png?v=1675402038',
      alt: 'alt of image',
      title: 'Snickers Mitnis',
    },
    {
      image:
        'https://www.monmoreconfectionery.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/n/snickers-4-pack-snacksize.png',
      thumbImage:
        'https://www.monmoreconfectionery.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/n/snickers-4-pack-snacksize.png',
      alt: 'alt of image',
      title: 'snickers',
    },
    {
      image:
        'https://b1.kannurdutyfree.in//pub/media/catalog/product/1/2/12000053.png',
      thumbImage:
        'https://b1.kannurdutyfree.in//pub/media/catalog/product/1/2/12000053.png',
      alt: 'alt of image',
      title: 'bounty',
    },
    {
      image:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622210779854.png',
      thumbImage:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622210779854.png',
      alt: 'alt of image',
      title: 'bubbly',
    },
    {
      image:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622210609915_11.png',
      thumbImage:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622210609915_11.png',
      title: 'daityMlik',
      alt: 'alt of image',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0339/7792/5764/products/BO-15033_T1.png?v=1676468216',
      thumbImage:
        'https://cdn.shopify.com/s/files/1/0339/7792/5764/products/BO-15033_T1.png?v=1676468216',
      title: 'digestev',
      alt: 'alt of image',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0558/0357/6507/products/image_0300932e-4004-4135-b94b-de5ceab7d325.png?v=1650268385',
      thumbImage:
        'https://cdn.shopify.com/s/files/1/0558/0357/6507/products/image_0300932e-4004-4135-b94b-de5ceab7d325.png?v=1650268385',
      alt: 'alt of image',
      title: 'freska',
    },
    {
      image:
        'https://www.logicvending.co.uk/wp-content/uploads/2018/05/galaxy-vending-pouch-visual-2014_1024x1024-1200x1200.png',
      thumbImage:
        'https://www.logicvending.co.uk/wp-content/uploads/2018/05/galaxy-vending-pouch-visual-2014_1024x1024-1200x1200.png',
      alt: 'alt of image',
      title: 'galaxy',
    },
    {
      image:
        'https://www.kinder.com/eg/sites/kinder_eg/files/2020-08/maxi-packshot-11.png?t=1679997380',
      thumbImage:
        'https://www.kinder.com/eg/sites/kinder_eg/files/2020-08/maxi-packshot-11.png?t=1679997380',
      alt: 'alt of image',
      title: 'kinder',
    },
    {
      image:
        'https://cdn.media.amplience.net/i/marsmmsprod/ct2033_img_01_1000110866_4010001455_4010001456?%24i%24=&w=576&h=576',
      thumbImage:
        'https://cdn.media.amplience.net/i/marsmmsprod/ct2033_img_01_1000110866_4010001455_4010001456?%24i%24=&w=576&h=576',
      alt: 'alt of image',
      title: 'm&ms',
    },
    {
      image:
        'http://cdn.shopify.com/s/files/1/0429/0078/3253/products/Milka_Bubbly_Alpine_Milk_Chocolate_90_Gram_1200x1200.png?v=1596390693',
      thumbImage:
        'http://cdn.shopify.com/s/files/1/0429/0078/3253/products/Milka_Bubbly_Alpine_Milk_Chocolate_90_Gram_1200x1200.png?v=1596390693',
      alt: 'alt of image',
      title: 'milka',
    },
    {
      image:
        'https://www.twix.com/sites/g/files/fnmzdf236/files/migrate-product-files/pm57alsea7mspqhhgfuf.png',
      thumbImage:
        'https://www.twix.com/sites/g/files/fnmzdf236/files/migrate-product-files/pm57alsea7mspqhhgfuf.png',
      alt: 'alt of image',
      title: 'twix',
    },
    {
      image:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/6/2/6223000496367_1.png',
      thumbImage:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/6/2/6223000496367_1.png',
      alt: 'alt of image',
      title: 'molto',
    },
    {
      image:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622201464271_1.png',
      thumbImage:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/7/6/7622201464271_1.png',
      alt: 'alt of image',
      title: 'moro',
    },
    {
      image:
        'https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article7858126.ece/ALTERNATES/s1200/0_image00627.png',
      thumbImage:
        'https://i2-prod.hulldailymail.co.uk/news/uk-world-news/article7858126.ece/ALTERNATES/s1200/0_image00627.png',
      alt: 'alt of image',
      title: 'oreo',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0368/8785/5243/products/66249_800x.png?v=1607453496',
      thumbImage:
        'https://cdn.shopify.com/s/files/1/0368/8785/5243/products/66249_800x.png?v=1607453496',
      alt: 'alt of image',
      title: 'trapa',
    },
    {
      image:
        'https://www.hmart.com/media/catalog/product/cache/0c75b0d6b380af6dca3ec180c127a709/9/8/980089500.png',
      thumbImage:
        'https://www.hmart.com/media/catalog/product/cache/0c75b0d6b380af6dca3ec180c127a709/9/8/980089500.png',
      alt: 'alt of image',
      title: 'nutella',
    },
  ];
}
