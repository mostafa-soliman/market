import { Pipe, PipeTransform } from '@angular/core';
import { Iitem } from '../interface/iitem';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Iitem[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchText) || (item.price+``).toLowerCase().includes(searchText) ;
    });
  }

}
