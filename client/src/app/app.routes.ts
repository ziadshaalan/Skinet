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
    {path: '', component: Home},
    {path: 'shop', component: Shop},
    {path: 'shop/:id', component: ProductDetails},
    {path: 'checkout', component: Checkout, canActivate: [authGuard, emptyGuard]},  // Checkout requires the user to be authenticated.
    {path: 'checkout/success', component: CheckoutSuccess, canActivate: [authGuard, orderCompleteGuard]},
    {path: 'orders', component: OrderComponent, canActivate: [authGuard]},
    {path: 'orders/:id', component: OrderDetailed, canActivate: [authGuard]},
    {path: 'account/login', component: Login},
    {path: 'account/register', component: Register},
    {path: 'cart', component: Cart},
    {path: 'test-error', component: TestError},
    {path: 'not-found', component: NotFound},
    {path: 'server-error', component: ServerError},
    {path: 'admin', component: Admin, canActivate: [authGuard],  children: [ {path: '', component: Admin, canActivate: [adminGuard]}]},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'},

];
