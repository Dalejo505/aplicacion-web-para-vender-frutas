# QA Review Report

| | |
|---|---|
| **Verdict** | ⚠️ APPROVED WITH WARNINGS |
| **Score** | 72/100 |
| **Files reviewed** | 12 |
| **Blockers** | 2 |
| **Warnings** | 5 |
| **Suggestions** | 3 |

## Summary

The MVP is a well-structured Next.js 14 landing page for a fruit marketplace with solid UI/UX foundations, good TypeScript typing, and clean component separation. However, several issues need attention before production deployment: broken/missing routes (404s on linked pages), a hardcoded cart count, incorrect emoji mappings in product data, and a duplicate font import conflict that will cause visual inconsistency.

## ❌ Blockers (must fix before merge)

#### 🔴 components/Navbar.tsx
**Issue:** Links to /products, /sellers, /about, /pricing, /dashboard reference routes that do not exist as app directory pages, causing 404 errors on every nav click.

**Fix:** Either create the missing page files (app/products/page.tsx, etc.) or convert the links to anchor href scroll targets (#products, #sellers) if this is a single-page layout, or add redirect stubs returning 'Coming Soon' pages.

#### 🔴 app/layout.tsx
**Issue:** Inter font is imported via next/font/google and applied via inter.className, but the body already uses font-sans (Plus Jakarta Sans via Tailwind config and @import in globals.css). This creates a conflicting font stack — Inter will override the intended Plus Jakarta Sans on the body element.

**Fix:** Remove the Inter import entirely from layout.tsx. The Google Fonts @import in globals.css and Tailwind fontFamily config already handle Plus Jakarta Sans correctly. If Inter is desired, remove the @import and Tailwind font config and use only next/font/google.

## ⚠️ Warnings

#### 🟡 lib/data.ts
**Issue:** Product emoji values do not match product names: Alphonso Mangoes uses 🍐 (pear emoji) and Dragon Fruit uses 🌉 (bridge emoji). These will render incorrectly in product cards.

**Fix:** Correct the emoji fields: Alphonso Mangoes → '🥭', Dragon Fruit → '🐉' or '🍈'. Audit all other products for similar mismatches.

#### 🟡 components/Navbar.tsx
**Issue:** Cart count is hardcoded to 3 (const [cartCount] = useState<number>(3)) with no state management or cart context, giving users a permanently incorrect badge.

**Fix:** For MVP, initialize to 0 or wire up a simple React context/localStorage-based cart state so the count reflects actual user actions. At minimum set the default to 0.

#### 🟡 app/globals.css
**Issue:** Google Fonts are loaded via @import inside a CSS file, which blocks rendering and is slower than using Next.js built-in font optimization.

**Fix:** Remove the @import from globals.css and use next/font/google for Plus Jakarta Sans and Syne, applying them via className or CSS variables in layout.tsx, consistent with Next.js 14 best practices.

#### 🟡 lib/data.ts
**Issue:** All product image fields are empty strings (image: ''). Product card components that render <img src={product.image}> will produce broken image elements or layout shifts.

**Fix:** Provide placeholder image URLs (e.g. from picsum.photos or unsplash source) for each product, or implement a fallback in the product card component to render the emoji prominently when image is empty.

#### 🟡 types/index.ts
**Issue:** CartItem, Order, and Seller types are defined but no cart, order, or seller management logic or pages exist. These unused types indicate planned features that are unimplemented.

**Fix:** Either implement stub pages/components for these features or document them clearly as post-MVP scope. Unused types in a shipped MVP are not harmful but indicate incomplete scope.

## 💡 Suggestions

#### 🔵 tailwind.config.js
**Issue:** keyframes truncated in the config snippet suggests the file may be incomplete (the fadeInUp keyframe's 100% transform value appears cut off). Verify the full file is valid.

**Fix:** Confirm the complete tailwind.config.js keyframes block is syntactically valid by running `npx tailwindcss --help` or the build step and checking for CSS generation errors.

#### 🔵 app/layout.tsx
**Issue:** The body element has antialiased duplicated twice (className includes antialiased literal string and then ${inter.className} which also includes antialiased from Inter font config).

**Fix:** Clean up: <body className={`font-sans antialiased ${inter.className}`}> — after resolving the font conflict, just use <body className='font-sans antialiased'>.

#### 🔵 package.json
**Issue:** No testing framework or linting beyond next lint is configured. For a business-facing marketplace MVP, at least basic smoke tests would reduce regression risk.

**Fix:** Add jest + @testing-library/react as devDependencies and write at minimum a render test for Navbar and the home page component.


## Security Notes

- No authentication or authorization is implemented. If admin/dashboard routes are added, ensure they are protected with a server-side auth check (e.g. NextAuth.js or Clerk) before deployment.
- No Content Security Policy headers are configured. Add a next.config.js headers() function with CSP, X-Frame-Options, and X-Content-Type-Options for production.
- Google Fonts loaded via @import makes an external network request on every page load. If privacy compliance (GDPR) is required for the target market, self-host fonts or use next/font which proxies through Next.js.
- No input sanitization exists yet — when forms (checkout, contact) are added, ensure server-side validation and sanitization before any database writes.
- The app has no rate limiting or CSRF protection stubs. Add these before any form submission endpoints are wired up.

## Pre-Production Checklist

- [ ] Fix the two blockers: create stub pages for all linked routes (/products, /sellers, /about, /pricing, /dashboard) or convert to anchor links, and resolve the Inter vs Plus Jakarta Sans font conflict in layout.tsx.
- [ ] Fix product emoji mismatches and add placeholder images to all products so the UI renders correctly on first load.
- [ ] Set cart count default to 0 in Navbar.tsx.
- [ ] Verify tailwind.config.js keyframes are syntactically complete by running `npm run build` locally and confirming zero CSS errors.
- [ ] Add security headers in next.config.js (X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy, basic CSP).
- [ ] Configure environment variables file (.env.local.example) for any future API keys (payment, database) so the deployment pipeline is ready.
- [ ] Run `npm run build` and `npm run lint` and resolve all TypeScript and ESLint errors before pushing to production.
- [ ] Set up a CDN or image optimization strategy (Next.js Image component with a configured domain) before adding real product images.

---

*QA review by SprintPilot · 2026-05-11*
