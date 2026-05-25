import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  imports: [
    MatCard
  ],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css',
})
export class ServerError {
  error?: any

  constructor(private router: Router) {
    const navigation = this.router.currentNavigation()
    this.error = navigation?.extras.state?.['error']
  }

}

/*Navigation state only exists during the navigation.
 Once navigation completes it's gone.
  That's why you must read it in the constructor — it's the earliest point, while navigation is still active.*/