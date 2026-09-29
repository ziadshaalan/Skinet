import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { ProductDetails } from './features/product-details/product-details';
import { TestError } from './features/test-error/test-error';
import { NotFound } from './shared/not-found/not-found';
import { ServerError } from './shared/server-error/server-error';
import { Cart } from './features/cart/cart-component';
import { Checkout } from './features/checkout/checkout';
import { Login } from './features/account/login/login';
import { Register } from './features/account/register/register';
import { authGuard } from './core/guards/auth-guard';
import { emptyGuard } from './core/guards/empty-guard';
import { CheckoutSuccess } from './features/checkout/checkout-success/checkout-success';
import { OrderComponent } from './features/orders/order';
import { OrderDetailed } from './features/orders/order-detailed/order-detailed';
import { orderCompleteGuard } from './core/guards/order-complete-guard';
import { Admin } from './features/admin/admin';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'shop', component: Shop },
    { path: 'shop/:id', component: ProductDetails },
    { path: 'cart', component: Cart },
    { path: 'checkout', loadChildren: () => import('./features/checkout/routes').then(r => r.checkoutRoutes) },
    { path: 'orders', loadChildren: () => import('./features/orders/routes').then(r => r.orderRoutes) },
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
