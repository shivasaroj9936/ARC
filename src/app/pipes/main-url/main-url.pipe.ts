import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainUrl'
})
export class MainUrlPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      value = value.split('/');
      value = value[value.length - 1].replaceAll('-', ' ');
      return value;
    }
    else
      return null;
  }

}
