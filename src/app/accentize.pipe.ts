import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'accentize'})
export class AccentizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    value = removeAccent(value).toLowerCase();
    value = value.replace(/ /g, '-');
    value = value.replace(/[^a-zA-Z0-9.-]/g, '');

    return value;
  }
}

function removeAccent(value: any) {
  let map = [
    {'a' : 'á|ä|à|ã|â|À|Á|Ã|Â|Ä'},
    {'e' : 'ě|é|è|ê|É|È|Ê'},
    {'i' : 'í|ì|î|Í'},
    {'o' : 'ö|ó|ò|ô|õ|Ó|Ò|Ô|Õ|Ö'},
    {'u' : 'ů|ú|ù|û|ü|Ú|Ù|Û|Ü|Ů'},
    {'c' : 'č|ç|Ç|Č'},
    {'n' : 'ň|ñ|Ñ|Ň'},
    {'z' : 'ž|Ž'},
    {'s' : 'š|Š'},
    {'r' : 'ř|Ř'},
    {'y' : 'ý|Ý'},
    {'z' : 'ž|Ž'},
    {'d' : 'ď|Ď'},
    {'t' : 'ť|Ť'},
    {'s' : 'ß'},
    
  ];

  var str = value;
  map.forEach(element => {
    Object.keys(element).forEach(key => {
      var reg = new RegExp(element[key], "g");
      str = str.replace(reg, key);
    });
  });
  return str;
}
