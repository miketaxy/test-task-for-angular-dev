import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
})
export class UsernamePipe implements PipeTransform {
  transform(value: string): string {
    const currentUser = JSON.parse(localStorage.getItem('credentials') || '{}').username || 'Guest';
    return `${value} - ${currentUser}`;
  }
}
