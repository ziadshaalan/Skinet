import { Route } from "@angular/router";
import { checkoutAccessGuard } from "../../core/guards/checkout-access-guard";
import { emptyGuard } from "../../core/guards/empty-guard";
import { orderCompleteGuard } from "../../core/guards/order-complete-guard";
import { Checkout } from "./checkout";
import { CheckoutStart } from "./checkout-start/checkout-start";
import { CheckoutSuccess } from "./checkout-success/checkout-success";

export const checkoutRoutes: Route[] = [
    // Entry screen: where the guard sends logged-out users, so it has no access guard itself
    { path: 'start', component: CheckoutStart, canActivate: [emptyGuard] },
    // Checkout: signed in OR guest email present
    { path: '', component: Checkout, canActivate: [checkoutAccessGuard, emptyGuard] },
    { path: 'success', component: CheckoutSuccess, canActivate: [checkoutAccessGuard, orderCompleteGuard] },
]