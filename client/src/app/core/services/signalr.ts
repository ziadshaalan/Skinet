import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HubConnection, HubConnectionBuilder, HubConnectionState} from '@microsoft/signalr'
import { Order } from '../../shared/models/order';

// #region Why the server pushes events
// The server pushes notifications over this connection (for example "your
// order has been completed"), so the app can react to them without asking
// the server again.
// #endregion
/** The SignalR connection of the signed-in user. */
@Injectable({
  providedIn: 'root',
})
export class Signalr {
  hubUrl = environment.hubUrl
  hubConnection?: HubConnection

  /** The order the server told us about - the UI reads it from here. */
  orderSignal = signal<Order | null>(null)

  // #region Why the guard is needed
  // WHY THE GUARD AT THE TOP:
  // createHubConnection() is called after every login and after every
  // registration. Without the guard, signing in twice (or a page that logs in
  // and registers in quick succession) would open a second connection and the
  // server would send every notification twice.
  //
  // The old connection is stopped first, so exactly one connection exists.
  // #endregion
  /** Opens the connection to the notification hub. */
  createHubConnection() {
    if (this.hubConnection) {
      this.stopHubConnection()
    }

    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl, {withCredentials: true})
      .withAutomaticReconnect()
      .build()

    this.hubConnection.start()
      .catch(error => console.log(error))

    this.hubConnection.on('OrderCompleteNotification', (order: Order) => {
      this.orderSignal.set(order)
    })
  }

  // #region Why the state is checked
  // The state is checked first: stop() on a connection that was never
  // started (or is already stopped) throws an error, and there is nothing to
  // stop when the user was never signed in.
  // #endregion
  /** Closes the connection. */
  stopHubConnection() {
    if (this.hubConnection?.state === HubConnectionState.Connected) {
      this.hubConnection.stop().catch(error => console.log(error))
    }
  }
}
