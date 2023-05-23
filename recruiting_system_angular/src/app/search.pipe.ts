import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args? : any) : any
   {

   if(!value) return null; //if no data return null
   if(!args) return value; //if no search return data

   args = args.toLowerCase();

   return value.filter((item :any )=>
   {
    return JSON.stringify(item).toLowerCase().includes(args);
   });

  }
  // console.log(object);

}
