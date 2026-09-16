import { Injectable } from '@angular/core';
// Counts active HTTP requests. `loading` is only false when ALL requests
// have finished — prevents the spinner from disappearing too early
// when multiple requests overlap.

@Injectable({
  providedIn: 'root',
})
export class Busy {
  loading = false
  busyRequestCount = 0

  busy() {
    this.busyRequestCount++
    this.loading = true
  }

  idle() {
    this.busyRequestCount--
    if(this.busyRequestCount <= 0 ){
      this.busyRequestCount = 0
      this.loading = false
    }
  }
}
