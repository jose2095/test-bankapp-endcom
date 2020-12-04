import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(numero: string): string {
    let formatcard = "";
    for (var i = 0; i + 4 <= numero.toString().length; i += 4) {
      formatcard = formatcard + numero.toString().slice(i, i + 4) + " ";
    }
    return formatcard;
  }

}
