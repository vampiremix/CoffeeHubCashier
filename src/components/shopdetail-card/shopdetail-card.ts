import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopdetailCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopdetail-card',
  templateUrl: 'shopdetail-card.html'
})
export class ShopdetailCardComponent {
  @Input() shop: any;
  @Input() user: any;


  constructor() {
    console.log('Hello ShopdetailCardComponent Component');

  }

}
