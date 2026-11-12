import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { ProductDetails } from './features/product-details/product-details';
import { TestError } from './features/test-error/test-error';
import { NotFound } from './shared/not-found/not-found';
import { ServerError } from './shared/server-error/server-error';
import { Cart } from './features/cart/cart-component';
import { Checkout } from './features/checkout/checkout';
import { authGuard } from './core/guards/auth-guard';
import { emptyGuard } from './core/guards/empty-guard';
import { CheckoutSuccess } from './features/checkout/checkout-success/checkout-success';
import { OrderComponent } from './features/orders/order';
import { OrderDetailed } from './features/orders/order-detailed/order-detailed';
import { orderCompleteGuard } from './core/guards/order-complete-guard';
import { Admin } from './features/admin/admin';
import { adminGuard } from './core/guards/admin-guard';

// #region How routing works
// Each object maps a URL path to the component that should be drawn inside
// app.html's <router-outlet>. The order matters: Angular uses the FIRST match.
//
// - `component` / direct import: the page is part of the initial JS bundle.
// - `loadChildren` with a dynamic import: a LAZY route. Its JS is downloaded
//   only when the user actually opens that area (checkout, orders, account,
//   admin). This keeps the first load small.
// - `canActivate`: guard functions that can block a route (auth, admin, empty
//   cart, completed order, ...). They redirect instead of showing forbidden UI.
// - `**`: the fallback for every URL that matched nothing above.
// #endregion

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'shop', component: Shop },
    { path: 'shop/:id', component: ProductDetails },
    { path: 'cart', component: Cart },
    { path: 'checkout', loadChildren: () => import('./features/checkout/routes').then(r => r.checkoutRoutes) },
    { path: 'orders', loadChildren: () => import('./features/orders/routes').then(r => r.orderRoutes) },
    // The account pages (login, forgot password, reset password) are lazy
    // loaded - they are not needed for the first paint of the shop.
    { path: 'account', loadChildren: () => import('./features/account/routes').then(r => r.accountRoutes) },
    { path: 'test-error', component: TestError },
    { path: 'not-found', component: NotFound },
    { path: 'server-error', component: ServerError },
    // Lazy-loads the Admin component to keep its code out of the initial bundle.
    // Route guards separately control whether the user is allowed to access the route.
    {
        path: 'admin',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/admin/admin').then(m => m.Admin),
                canActivate: [adminGuard]
            }
        ]
    },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },



];
