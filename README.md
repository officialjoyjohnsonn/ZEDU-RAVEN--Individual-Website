# VOLT. — Modern E-commerce

Unique dark + volt aesthetic, fully functional cart/checkout/orders, search, product pages, Google Auth, Supabase + Neon persistence, Mailgun emails.

## 1) Install
```bash
npm install
cp .env.example .env.local
npm run dev
```

## 2) Supabase setup (database)
1. Go to supabase.com → New project → copy Project URL + anon key + service_role key into `.env.local`.
2. SQL Editor → paste `supabase/schema.sql` → Run.

## 3) Neon setup (database fallback / primary for orders)
1. Go to neon.tech → New project → copy pooled `DATABASE_URL` into `.env.local`.
2. App auto-creates `orders` table on first checkout — or run `supabase/schema.sql` in Neon SQL editor too.

> Checkout writes to **both** if configured: Supabase first, Neon second. `/orders` reads from whichever responds.

## 4) Google Auth (Google Cloud Console)
1. console.cloud.google.com → New project → APIs & Services → OAuth consent screen (External) → fill app name/email.
2. Credentials → Create Credentials → OAuth client ID → Web application.
3. Authorized redirect URI: `http://localhost:3000/api/auth/callback/google` (prod: `https://yourdomain.com/api/auth/callback/google`).
4. Copy Client ID + Secret → `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` in `.env.local`.
5. Set `NEXTAUTH_SECRET` to a long random string, `NEXTAUTH_URL=http://localhost:3000`.

## 5) Mailgun (confirmation emails)
1. mailgun.com → Add domain → verify DNS → get API key.
2. Set `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_FROM_EMAIL`.
3. Without keys, emails are mocked in server logs (checkout still works).

## Routes
- `/` shop, `product/[slug]`, `/search?q=`, `/checkout`, `/success?order=`, `/orders`, `/login`
- API: `POST /api/orders` (persist + email), `GET /api/orders?email=`
