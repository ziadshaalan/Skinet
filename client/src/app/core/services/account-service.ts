import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Address, User } from '../../shared/models/user';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl
  private http = inject(HttpClient)
  currentUser = signal<User | null>(null)

    // withCredentials here is now redundant — authInterceptor adds it to every request automatically
  login(values:any) {
    let params = new HttpParams()
    params = params.append('useCookies', true)
    return this.http.post<User>(this.baseUrl + 'login', values, {params, withCredentials: true})

  }

  register(values: any) {
    return this.http.post(this.baseUrl + 'account/register', values)
  }

  logout() {
      // withCredentials here is now redundant — authInterceptor adds it to every request automatically
    return this.http.post(this.baseUrl + 'account/logout', {}, {withCredentials: true})
  }

  getUserInfo() {
    return this.http.get<User>(this.baseUrl + 'account/user-info', {withCredentials: true}).pipe(
       // tap = side effect only, does NOT change what gets emitted downstream 
         // (use map only if you need to transform the value itself)
         //Transform means = take the input and turn it into something different, then pass that new thing downstream.
        //Side effect means = do something extra (logging, updating a signal, calling another function) without changing what's actually flowing through the pipe.
         tap(user => this.currentUser.set(user))
         // returns an Observable (lazy) — does nothing until subscribed
  // lets this method be reused inside forkJoin AND called standalone elsewhere
    )
  }

  updateAddress(address: Address) {
    return this.http.post(this.baseUrl + 'account/address', address, {withCredentials: true})
  }

  getAuthState() {
    return this.http.get<{isAuthenticated: boolean}>(this.baseUrl + 'account/is-authenticated')
  }


}
