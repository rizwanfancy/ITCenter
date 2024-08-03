import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringpipe',
  standalone: true
})
export class StringpipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return 'Rizwan ' + value
    }
    return null;
  }



}
