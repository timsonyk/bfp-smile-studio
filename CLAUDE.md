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
