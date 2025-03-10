import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchItemPipe implements PipeTransform {

  transform(items: any[], searchText: string, key: string): any[] {
    if (!items || !searchText || !key) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item[key]?.toString().toLowerCase().includes(searchText)
    );
  }

}
