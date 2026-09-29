import { Route } from "@angular/router";
import { authGuard } from "../../core/guards/auth-guard";
import { emptyGuard } from "../../core/guards/empty-guard";
import { orderCompleteGuard } from "../../core/guards/order-complete-guard";
import { Checkout } from "./checkout";
import { CheckoutSuccess } from "./checkout-success/checkout-success";

export const checkoutRoutes: Route[] = [
    { path: '', component: Checkout, canActivate: [authGuard, emptyGuard] },  // Checkout requires the user to be authenticated.
    { path: 'success', component: CheckoutSuccess, canActivate: [authGuard, orderCompleteGuard] },
]