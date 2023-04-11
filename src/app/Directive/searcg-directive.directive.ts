import { Directive } from '@angular/core';
import { Iitem } from '../interface/iitem';

@Directive({
  selector: '[appSearcgDirective]'
})
export class SearcgDirective {
  items: Iitem[]=[];
  constructor() {

   }

  //  search(searchString: string) {
  //   const results = this.items.filter(item =>
  //     item.toString().toLowerCase().includes(searchString.toLowerCase())
  //   );
  //   this.searchResults.emit(results);
  // }


}
