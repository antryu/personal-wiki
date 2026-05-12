# Moeum Health Admin V&V P0 Blockers — Fix Report 2026-05-12

## Summary

All 3 P0 blockers resolved. Build clean. Lighthouse a11y 100/100, perf 90/100 (prod). Admin bypass confirmed working.

---

## P0-1: meta-viewport user-scalable=no — FIXED

**File**: `app/layout.tsx`

**Before**:
```ts
export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};
```

**After**:
```ts
export const viewport: Viewport = {
  maximumScale: 5,
  userScalable: true,
};
```

WCAG 1.4.4 (Resize text) violation eliminated. axe-core: 0 critical violations.

---

## P0-2: /auth/login a11y 89 → 100 — FIXED

**File**: `app/auth/login/page.tsx`

Four fixes applied:

1. **Form accessible name** — added `aria-label="이메일 로그인 양식"` to `<form>`
2. **Submit button aria-busy** — added `aria-busy={loading}` and `aria-label` (changes on loading state)
3. **Social buttons aria-label** — Google button: `aria-label="Google 계정으로 로그인"`, Apple: `aria-label="Apple 로그인 (준비 중)"` + `aria-disabled="true"`
4. **landmark-one-main** — changed right form panel `<div>` to `<main aria-label="로그인">`
5. **color-contrast** — signup link `var(--accent)` (#5266eb, contrast 3.77:1) replaced with `#6e80f5` (contrast 5.58:1 on #171721 background)

**Result**: axe-core 0 violations, Lighthouse a11y 100/100.

---

## P0-3: Admin V&V auth bypass — FIXED

**File**: `lib/auth/admin.ts`

Added bypass at top of `requireAdmin()`:

```ts
if (
  process.env.NODE_ENV === "development" &&
  process.env.VV_AUTH_BYPASS === "true"
) {
  console.warn("[requireAdmin] VV_AUTH_BYPASS active — skipping auth check (dev only)");
  return { id: "vv-bypass", email: "vv-bypass@dev.local" };
}
```

**Usage**:
```bash
VV_AUTH_BYPASS=true npm run dev
# Then: http://localhost:3000/admin → HTTP 200 (no redirect)
```

**Production safety**: guarded by `NODE_ENV === "development"` — zero effect in production builds.

Documented in `env.example` under `VV_AUTH_BYPASS=`.

---

## Verification Results

| Check | Result |
|---|---|
| `npm run build` | 0 TS errors, 0 build errors |
| axe-core /auth/login | 0 violations |
| Lighthouse a11y (dev) | 100/100 |
| Lighthouse a11y (prod) | 100/100 |
| Lighthouse perf (prod) | 90/100 |
| LCP (prod) | 3.7s (font loading; not in scope) |
| Admin bypass (/admin, VV_AUTH_BYPASS=true) | HTTP 200 confirmed |

---

## Files Modified

| File | Change |
|---|---|
| `app/layout.tsx` | viewport: maximumScale 1→5, userScalable false→true |
| `app/auth/login/page.tsx` | aria-label form/buttons, main landmark, color-contrast fix |
| `lib/auth/admin.ts` | VV_AUTH_BYPASS dev bypass in requireAdmin() |
| `env.example` | VV_AUTH_BYPASS documented |
