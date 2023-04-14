import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumb'
})
export class ThumbPipe implements PipeTransform {

  constructor() { }

  transform(src: string, args: [HTMLImageElement, string, string, number, number?, number?]) {

    src = (args.length >= 5) ? src.replace('{h}', String(args[4])).replace('{w}', String(args[3])) : src.replace('{h}', String(args[3])).replace('{w}', String(args[3]));

    if (args[0] && !src.endsWith('.svg')) {
      let splitted = src.split('.');
      let extension = splitted.pop();
      args[0].srcset = [splitted.join('.') + '@2x', extension].join('.')+' '+'2x';
    }

    return src;

  }

}