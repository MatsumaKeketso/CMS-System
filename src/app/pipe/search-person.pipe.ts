import { Pipe, PipeTransform } from '@angular/core';
import { reservations } from '../reservations/model/model';
@Pipe({
  name: 'searchPerson'
})
export class SearchPersonPipe implements PipeTransform {

  transform(value: Array<reservations>, args?: string): any {
    if (args === undefined) {
      return value;
    }
    args = args.toLowerCase();
// tslint:disable-next-line: no-shadowed-variable
    return value.filter(( Reservations => {
      return Reservations.name.toLowerCase().includes(args);
    }));
  }

}
