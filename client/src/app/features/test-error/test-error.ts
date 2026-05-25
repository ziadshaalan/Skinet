import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test-error',
  imports: [
    MatButton,
  ],
  templateUrl: './test-error.html',
  styleUrl: './test-error.css',
})
export class TestError {
  baseUrl = 'https://localhost:5001/api/'
  private http = inject(HttpClient)
  modelStateError?: []


  get404Error() {
    this.http.get(this.baseUrl + 'buggy/notfound').subscribe({
      next: repsonse => console.log(repsonse),
      error: error => console.log(error)
    })
  }

   get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: repsonse => console.log(repsonse),
      error: error => console.log(error)
    })
  }

   get401Error() {
    this.http.get(this.baseUrl + 'buggy/unauthorized').subscribe({
      next: repsonse => console.log(repsonse),
      error: error => console.log(error)
    })
  }

   get500Error() {
    this.http.get(this.baseUrl + 'buggy/internalerror').subscribe({
      next: repsonse => console.log(repsonse),
      error: error => console.log(error)
    })
  }

   get400ValidationError() {
    this.http.post(this.baseUrl + 'buggy/validationerror', {}).subscribe({
      next: repsonse => console.log(repsonse),
      error: error => this.modelStateError = error
    })
  }
}


/**
 * TestError Component
 *
 * Development-only component for manually testing the global error interceptor.
 * Each method triggers a specific HTTP error from the buggy controller on the backend.
 *
 * Endpoints hit:
 *  - GET  buggy/notfound        → 404 → redirects to /not-found
 *  - GET  buggy/badrequest      → 400 → snackbar with error message
 *  - GET  buggy/unauthorized    → 401 → snackbar with error message
 *  - GET  buggy/internalerror   → 500 → redirects to /server-error
 *  - POST buggy/validationerror → 400 → snackbar with validation details
 *
 * Errors are logged to console AND handled globally by errorInterceptor.
 * Remove or route-guard this component before production.
 */