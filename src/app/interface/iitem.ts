import { Icategory } from "./icategory"

export interface Iitem {
  id:string,
  name:string,
  price:number,
  photoUrl?:string,
  quantity:number,
  category?:Icategory,
  totalPrice?:number,
  isInCart?:boolean



}

