import { Iitem } from 'src/app/interface/iitem';
// import { Icategory } from "./icategory"

export interface Icart {
  items: Iitem[],
  totalQuantity: number ,
  totalPrice: number


}
