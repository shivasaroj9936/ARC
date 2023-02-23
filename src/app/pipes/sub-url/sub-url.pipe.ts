import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subUrl'
})
export class SubUrlPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      value = value.replaceAll('/', ' > ');
      value = value.substring(11);
      return value;
    }
    else
      return null;
  }

}
