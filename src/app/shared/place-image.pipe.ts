import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeImage'
})
export class PlaceImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let url = '';
    value == null || value == '' || value == undefined ?
      url = 'https://www.shearwater.com/wp-content/plugins/lightbox/images/No-image-found.jpg'
      : url = value;
    return url;
  }

}
