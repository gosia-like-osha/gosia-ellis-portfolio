# Gosia Ellis — portfolio (Next.js)

## Local preview (use your own browser)

1. From this project folder, run:

```bash
npm run dev
```

2. Wait until the terminal prints **`Local: http://localhost:3001`**.

3. Paste into Chrome/Safari/Firefox (not related to Vercel):

- **Home:** `http://localhost:3001`
- **Workspace preview:** `http://localhost:3001/preview`

If that port is busy, stop the other `next dev` or run `PORT=3002 npm run dev` and use the port shown in the terminal instead.

---

## Editing

Start from `app/page.tsx` (home) or `app/preview/page.tsx`. Save files; the dev server hot-reloads.

## Deploy

Production hosting (e.g. Vercel) is optional and separate from local `localhost` preview. Use whatever host you prefer; see [Next.js deploying](https://nextjs.org/docs/app/building-your-application/deploying).
