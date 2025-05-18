import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortRouteName',
  standalone: true
})
export class ShortRouteNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 15 ? value.substring(0, 15) + '...' : value;
  }
}