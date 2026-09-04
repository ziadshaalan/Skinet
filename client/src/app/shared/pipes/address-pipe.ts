import { Pipe, PipeTransform } from '@angular/core';
import { ConfirmationToken } from '@stripe/stripe-js';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {

  transform(value?: ConfirmationToken['shipping'], ...args: unknown[]): unknown { //Destructuring — pulls each property out of value.address into its own standalone variable, so you don't have to write value.address.line1, value.address.city, etc. repeatedly below.
    if (value?.address && value.name) {
      const {line1, line2, city, state, country, postal_code} = value.address
      return `${value.name}, ${line1}${line2?', ' + line2: ''}, ${city}, ${state}, ${postal_code}, ${country} `
    } else {
        return 'Unknown address'
     }
  }
}
