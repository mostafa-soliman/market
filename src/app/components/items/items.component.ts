import {  ItemsService } from './../../services/items.service';
import { Iitem } from './../../interface/iitem';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class itemsComponent implements OnInit {
  @ViewChild('image')
  items: Iitem[] = [];
  image!: ElementRef;
  constructor(private itemsService:ItemsService) {}

  ngOnInit(): void {}

  addNewItem(form:NgForm) {
    this.itemsService.addNewItem({
      id:'50',
      name:form.value.name,
      price:form.value.price,
      photoUrl:form.value.image,
      quantity:form.value.quantity
            // category:Icategory,

    })
    // let name=(<Iitem>form.value).name,
    //     price=(<Iitem>form.value).price,
    //     image=(<HTMLInputElement>this.image.nativeElement).files;
    // console.log(form);
    // console.log((<HTMLInputElement>this.image.nativeElement).files);

  }
  removeItem(item:Iitem){
    this.itemsService.removeItemFromStorage(item);
    this.upDateItem();
  }

  upDateItem(){
    this.items = this.itemsService.getAllItems();
  }
}
