import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyCurrency',
})
export class EgyCurrencyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} EGP`;
  }
}
