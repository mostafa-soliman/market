import { Icategory } from "./icategory"

export interface Icart {
  id:string,
  name?:string,
  price?:number,
  photoUrl?:string,
  category?:Icategory,
  quantity: number,
}
