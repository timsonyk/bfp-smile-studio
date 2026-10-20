# BFP Smile Studio

Dental clinic website built with React, TypeScript, and Vite.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with CSS variables for theming
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM v6
- **State/Data:** TanStack React Query
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── ui/          # shadcn/ui components (do not edit directly)
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── BookingForm.tsx
│   ├── BeforeAfterSlider.tsx
│   └── TeamCard.tsx
├── pages/           # Route page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Team.tsx
│   ├── TeamMember.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── BeforeAfter.tsx
│   ├── Contacts.tsx
│   └── NotFound.tsx
├── data/            # Static data files
│   ├── servicesData.ts
│   └── teamData.ts
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── App.tsx          # Main app with routing
```

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/about` | About | About the clinic |
| `/team` | Team | Team listing |
| `/team/:slug` | TeamMember | Individual team member |
| `/services` | Services | Services listing |
| `/services/:slug` | ServiceDetail | Individual service |
| `/before-after` | BeforeAfter | Before/after gallery |
| `/contacts` | Contacts | Contact information |
| `/privacy-policy` | PrivacyPolicy | Политика обработки ПДн (ст. 18.1 152-ФЗ) |
| `/soglasie` | Consent | Отдельное согласие на обработку ПДн для формы записи |
| `/svedeniya` | ClinicInfo | Реквизиты, лицензия, контролирующие органы (ПП РФ № 736) |

## Conventions

- **Path Aliases:** Use `@/` for imports from `src/` directory
- **Component Files:** PascalCase (e.g., `TeamCard.tsx`)
- **shadcn/ui:** Components in `src/components/ui/` are generated - prefer not to modify directly
- **Styling:** Use Tailwind utility classes; theme colors defined via CSS variables
- **Dark Mode:** Configured via `darkMode: ["class"]` in Tailwind config

## Adding New Routes

Add routes in `src/App.tsx` above the catch-all `"*"` route:
```tsx
<Route path="/new-page" element={<NewPage />} />
```

## Booking form & server

- The site is served by `server/index.mjs` (`npm start`, or the `Dockerfile` on Timeweb App Platform): it serves `dist/` and handles `POST /api/zayavka`.
- Bookings are emailed via Yandex 360 SMTP to `MAIL_TO` (data stays on servers in Russia, ч. 5 ст. 18 152-ФЗ). Telegram, if configured, gets only a ping without personal data. Never send form data from the browser to third-party APIs or put tokens in frontend code.
- Env: `SMTP_USER`, `SMTP_PASS` (Yandex app password), optional `MAIL_TO`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
- Consent checkbox must stay unticked by default. When changing `src/pages/Consent.tsx`, bump `CONSENT_VERSION` in the server.

## Legal

- Clinic requisites, license, supervisors and the medical-ad warning live in `src/data/clinicInfo.ts` — edit only there.
- Medical-ad warning («Имеются противопоказания…», ч. 7 ст. 24 38-ФЗ) is shown in the footer, on `/before-after` and under reviews. Avoid claims like «безболезненно», «гарантия», «лучший».

## Assets

- **Images:** Store in `src/assets/` and import directly (Vite handles bundling)
- **Kanji background:** `src/assets/kanji.png` — used as decorative background element in philosophy section

## Important Notes

- Keep this file updated with new features, conventions, and architectural decisions
- Document any non-obvious patterns or project-specific implementations
