// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor( ) { }

  getAllGoods(){
    // 'goods' is path in DB
    //  this.fs.collection('goods').valueChanges();
  }

}
