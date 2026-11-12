# SkiNet UI guide (for the non-UI developer)

This is a map of the client UI, in the order a visitor experiences it:
home → header → shop → product details → cart → checkout → orders → account → admin.
The source files also contain comments explaining the specific trick used in each
place. This document explains the ideas those comments assume.

---

## 1. The foundation: `src/app/app.*`

`App` is the **shell** around every page:

- `<app-header>` — the fixed navigation bar.
- `<router-outlet>` — the hole where the current route's page is drawn.
- `<app-mini-cart>` — the slide-in basket, kept alive once for the whole session.

`app.ts` listens to router events and sets `isAuthPage`. The account/sign-up route
uses a different layout: the header is hidden, and the page is given the whole
viewport. This is why `/account/login` feels like a separate "screen" rather than
another page inside the shop.

Key CSS ideas used here:

- **`position: fixed`** — the element is glued to the viewport, not the document.
  The header stays at the top while the page scrolls behind it.
- **`100dvh`** — the current visible viewport height. It changes when a phone's
  browser toolbar slides in/out. `100vh` can be taller than the visible area, which
  is exactly what leaves a white strip under a full-screen background.
- **`overflow: hidden` + inner `overflow-y: auto`** — the page itself cannot scroll;
  only the form area scrolls if it is taller than a short screen.

---

## 2. Home page: `features/home/`

The home route is a single **hero**: one large photographic banner with a headline
and a call-to-action button.

- `home.html` is the content: heading, subtitle, "Shop Now" link.
- `home.css` is the look:
  - **full-bleed**: the section escapes the centered `.container` with
    `width: 100vw` and a negative margin, so the photo touches both screen edges.
  - **`background-size: cover`**: the image fills the box without stretching. Some
    of the photo may be cropped, which is normal for a hero.
  - **`background-position: center`** (or `72% center` on narrow screens): decides
    which part of the photo stays visible when cropping.
  - **`::before` overlay**: a semi-transparent gradient layer over the photo. It is
    not decoration — it is what makes the text readable. The gradient is stronger
    on the side where the text sits.
  - **`clamp(min, preferred, max)`**: a font size that shrinks on phones and grows
    on desktop without writing a media query for every size.
  - **`@media (prefers-reduced-motion: reduce)`**: turns off entrance animations
    for people who get motion sickness.

The hero is intentionally the **only** content on `/` — it is a landing panel,
not a long marketing page.

---

## 3. Header: `layout/header/`

The header is the fixed bar at the top of normal pages.

- `position: fixed; top: 0; z-index: 50` keeps it above the page.
- It owns its own height (`h-16` phones, `lg:h-20` desktop), so other pages only
  need a matching top margin in `app.html` (`mt-20 lg:mt-24`).
- At `lg` the full navigation appears; below `lg` it collapses into a hamburger
  menu. This is the **mobile-first** approach: the small-screen layout is the
  default, and `lg:` classes add the desktop complexity.
- Material components (`mat-button`, `mat-icon-button`) are sometimes wrapped in
  a plain `<div>` before applying `hidden lg:flex`. Reason: Material's own CSS is
  more specific than Tailwind's one-class utilities, so the wrapper is the reliable
  place to control visibility.
- The cart badge is absolutely positioned on the cart icon. `custom-badge` in
  `header.css` sets its size.
- The pressed navigation link gets the `.active` class from `routerLinkActive`.
  `[routerLinkActiveOptions]="{ exact: true }"` stops "Home" from staying active on
  every page.

**Specificity**, in one sentence: when two CSS rules both match, the more specific
selector wins. Material often wins against a plain Tailwind class. That is why you
will see `text-red-700!` (important) or `h-full!` in a few places.

---

## 4. Shop page: `features/shop/`

This is the product grid and its controls.

- `shop.html` layout:
  - top row: paginator, search box, Filters button, Sort menu.
  - below: a responsive CSS **grid**. `grid-cols-2` on phones, up to
    `xl:grid-cols-5` on wide screens. Cards automatically stay aligned because they
    share the same track heights.
- `shop.ts` state:
  - `shopParams` is the single source of truth for the current filters, sort and
    page number. Every control writes into it, then calls `getProducts()`.
  - search uses an RxJS `Subject` + `debounceTime(400)`: typing does not fire one
    request per keypress; it waits for 400 ms of silence.
  - `takeUntilDestroyed()` automatically unsubscribes when the page closes, which
    prevents memory leaks.
  - the Filters button opens a Material dialog. The dialog returns the chosen
    brands/types; the shop then copies them into `shopParams`.
- `product-item/` is one card:
  - `aspect-square` + `object-cover` gives every product image the same shape.
  - `h-full!` and `flex-1` make all cards in a row the same height, so the "Add to
    cart" buttons line up.
  - on phones only the cart icon shows; the text label returns from `sm` up.
  - `stopPropagation()` on the button stops the card's own `routerLink` from also
    firing when you click "Add to cart".

---

## 5. Product details: `features/product-details/`

- One column on phones, two columns from `lg` up (`grid-cols-1 lg:grid-cols-2`).
- `[(ngModel)]` is two-way binding: the quantity input and the component property
  update each other.
- The add button is disabled while `quantity === quantityInCart`, so it is clear
  that nothing would change.
- `currency` is an Angular pipe: it formats a number using the app's locale.
- "Back to shop" is a real link, not `history.back()`, so a page opened directly
  still has somewhere sensible to go.

---

## 6. Cart and mini-cart

`features/cart/` is the full basket page:

- `cart.html` is a two-column layout on desktop: 3/4 for the items, 1/4 for
  `app-order-summary`. On phones it stacks.
- `cart-item/` is one row. The `flex-wrap` + `order-*` classes put the quantity
  stepper and price on their own row on small screens, then back on one line from
  `lg`.
- The steppers call `CartService`; they do not own cart state themselves.

`shared/components/mini-cart/` is the slide-in drawer:

- both the backdrop and the drawer stay in the DOM; `.open` changes `transform`
  and `opacity`. If Angular removed them with `@if`, there would be nothing to
  animate.
- `position: fixed` + `translateX(100%)` parks the drawer off-screen.
- `z-index: 60/61` puts it above the fixed header (`z-50`).
- `inert` while closed keeps the hidden drawer out of keyboard tab order and away
  from screen readers.
- the drawer is full width on phones and about 28% wide on desktop.

---

## 7. Checkout: `features/checkout/`

- `checkout-start` shows the existing auth form beside a guest option.
- `checkout` is a Material **stepper**: Address → Shipping → Payment → Confirmation.
  Each step's Next button is disabled until that step reports `completed`.
- the Address and Payment `<div id="...">` elements are mount points for Stripe's
  own embedded form. Stripe controls the markup inside them; we only provide the
  box.
- `checkout-delivery` uses a radio group. The selected delivery method is stored
  in `CartService`, so it survives navigation and is used by the total.
- `checkout-review` shows the final summary from the Stripe confirmation token.
- `checkout-success` polls for the order after payment. The spinner is replaced
  by a "still confirming" message after a timeout instead of spinning forever.

---

## 8. Orders: `features/orders/`

- the order list is a table inside `overflow-x-auto`. On a phone the table can be
  wider than the screen, so the table scrolls inside its own box instead of making
  the whole page scroll sideways.
- clicking a row navigates to `/orders/:id`.
- `order-detailed` reuses the same summary layout as checkout. Pipes (`address`,
  `payment`) turn API objects into readable text.

---

## 9. Account and sign-up: `features/account/`

This is the most customised UI in the app.

- `/account`, `/account/login` and `/account/register` all show the same
  **email-first** page: type an email → the API says whether the account exists →
  password screen or create-account screen.
- the header is hidden by `App`, and the page fills `100dvh`.
- `login.css` layers:
  1. `hero6.jpg` as a `cover` background;
  2. `.auth-page__scrim`, a navy gradient overlay that keeps text readable;
  3. `.auth-page__inner`, a CSS grid: invitation on the left, form card on the
     right;
  4. `.auth-card`, a translucent white card with `backdrop-filter: blur()`.
- on phones the left invitation is hidden, so the form is the first thing seen.
- the page is the scroll container (`overflow-y: auto`), not the document. That is
  why scrolling can never reveal the white body background.
- `forgot-password` and `reset-password` are the recovery branch of the same
  account area.

---

## 10. Admin: `features/admin/`

- `admin.html` uses a Material **tab group**: Orders, Catalog, Customer service.
- the admin route is lazy-loaded and guarded; the code is not downloaded until an
  admin opens it.
- `admin-catalog` and `admin-orders` both use `app-custom-table` so the two tables
  behave the same way: columns, actions, pagination.
- `product-form` is a dialog form for creating/editing a product. It reuses the
  shared text/select/textarea inputs, so validation styling stays consistent.

---

## 11. Shared UI vocabulary

These words appear all over the CSS. Once you know them, most files read easily:

| Term | What it actually does here |
| --- | --- |
| `container` | Centered page width with horizontal padding (`src/styles.css`). |
| `flex` / `grid` | Two ways to arrange children. Flex is one-directional; grid is rows + columns. |
| `gap` | Space between children. More reliable than margins. |
| `w-full`, `h-full` | Width/height 100% of the parent. |
| `min-w-0` | Lets a flex child shrink instead of forcing the row wider. |
| `truncate` | Cuts long text with `...` instead of overflowing. |
| `aspect-square` | Keeps a box as wide as it is tall. |
| `object-cover` | Fills an image box while preserving the image's proportions (crops the excess). |
| `breakpoint` (`sm`, `md`, `lg`, `xl`) | Screen-width thresholds where responsive classes switch. |
| `z-index` | Stacking order. Higher numbers sit on top. |
| `backdrop-filter` | Blurs whatever is behind an element (the glass card). |
| `clamp()` | A value that scales between a minimum and maximum. |
| `::before` / `::after` | Decorative pseudo-elements; they are not real content. |
| `@media` | CSS rules that only apply at certain screen sizes or preferences. |

### Material vs Tailwind

- **Tailwind** utilities (`p-4`, `flex`, `text-sm`) are small single-purpose
  classes compiled into `styles.css`.
- **Angular Material** components bring their own compiled CSS. Sometimes Material
  wins a conflict because its selector is more specific.
- **Component CSS** (`shop.css`, `login.css`, …) is scoped to that component. It
  cannot style Material's internal DOM unless the selector lives in the global
  `styles.css`. This is why a few overrides (`.social-button`,
  `.mat-icon.rule-icon`, snackbar width) are global.
- **`!` in Tailwind** (`text-red-700!`) adds `!important`. Use it only to beat
  Material, not as a general styling tool.

---

## 12. A quick checklist when changing UI

1. Start at the template (`.html`) — what content exists?
2. Then the component CSS / Tailwind classes — how is it arranged?
3. Test at 375 px (phone), ~768 px (tablet), and wide desktop.
4. Check that text stays readable over images (overlay contrast).
5. Check keyboard use: tab order, visible focus, `aria-label` on icon-only buttons.
6. Check that nothing scrolls sideways; tables and wide rows need their own
   `overflow-x-auto`.
7. If a fixed/absolute element is involved, check `z-index`.
8. If it is a full-screen page, check `100dvh` and make sure the page itself (not
   the body) owns scrolling.
