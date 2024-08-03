import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat',
  standalone: true
})
export class JsonFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return JSON.stringify(value);
  }

}
