import { GoodsService } from './../../services/goods.service';
import { Igood } from './../../interface/igood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    goods:Igood[]=[]
  constructor(){}


  ngOnInit(){
    // this.gs.getAllGoods().subscribe(data=>this.goods=data)
  }

  addToCart(){
    // console.log('added',id)
  }
}
