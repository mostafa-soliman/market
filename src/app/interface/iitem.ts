import { Icategory } from "./icategory"

export interface Iitem {
  id:string,
  name?:string,
  price?:number,
  photoUrl?:string,
  category?:Icategory,
  quantity?: number
}
