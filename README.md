# FutureMinds AI Guru

FutureMinds AI Guru is a polished Next.js learning platform demo for modern education teams. It is built to showcase role-based journeys across students, teachers, parents, tutors, and administrators, with complete flows for lessons, quizzes, progress analytics, rewards, and AI-assisted learning.

The product is intentionally demo-first. Most interactions are mock-driven so the UI can be reviewed, iterated on, and showcased without a backend. The visual language is a futuristic education dashboard with a bold, consistent brand palette.

## Product Vision And Goals

- Create a high-fidelity UI playground for future education products.
- Unify all roles under a consistent visual system and interaction model.
- Enable fast iteration on learning, assessment, and analytics experiences.
- Make new feature ideas demo-ready without requiring data services.

## Experience Map (End-To-End Flow)

This app is designed around a clear, role-based flow. Every journey follows a predictable rhythm: onboarding, role selection, dashboard overview, task-focused experiences, and analytics or settings.

1. **Entry And Onboarding**
   - Landing page introduces the platform vision and key capabilities.
   - Users enter via `/login` or `/signup` depending on intent.
   - The `/role-selection` step establishes context and routing.
2. **Role Dashboards**
   - Each role starts on a dedicated dashboard (`/student`, `/teacher`, `/parent`, `/tutor`, `/admin`).
   - Dashboards summarize tasks, current progress, and next actions.
3. **Learning And Assessment**
   - Modules (`/modules`) provide a structured learning catalog.
   - Lessons (`/lesson`) deliver content and practice.
   - Quizzes (`/quiz`) validate learning and drive analytics.
4. **Analytics And Motivation**
   - Progress (`/progress`) consolidates insights and trends.
   - Rewards (`/rewards`) highlight achievements and milestones.
5. **Management And Settings**
   - Settings (`/settings`) support account and preference updates.
   - Admin, parent, and teacher sub-routes cover role-specific management needs.

## Role-Specific Journeys

### Student

- Navigate from the student dashboard into modules, lessons, and quizzes.
- Track progress and reward milestones.
- Focus on clarity, momentum, and motivation.

### Teacher

- Manage assignments and class activity.
- Monitor attendance, roster, and live sessions.
- Review reports and insights for class performance.

### Parent

- Monitor learner progress and attendance.
- View alerts, reports, and skill development signals.
- Identify weak topics and intervene early.

### Tutor

- Provide guided support sessions.
- Review learner performance and growth trends.

### Admin

- Manage users, schools, and system-level settings.
- Ensure consistency of experience across organizations.

## Technical Architecture (UI-First)

This project is a UI-first Next.js application built with the App Router. Its architecture is optimized for rapid prototyping, predictable routing, and consistent UI composition.

- **Routing Layer**
  - `src/app` defines route segments and page-level layouts.
  - Each role has a dedicated route subtree with clear navigation.
- **UI Composition Layer**
  - `src/components` holds shared UI components and patterns.
  - Shared layout primitives and UI widgets keep the design consistent.
- **Data And State Layer**
  - `src/lib/mock-data.ts` provides deterministic mock data.
  - UI reads mock data directly for demo-ready flows.
- **Styling Layer**
  - Tailwind CSS drives the visual system and component styling.
  - Brand palette alignment is enforced through utility usage.

## Tech Stack (Detailed)

- **Framework**: Next.js 15 with App Router for structured, file-based routing.
- **UI Library**: React 19 for component-based UI development.
- **Language**: TypeScript for type safety and maintainable UI logic.
- **Styling**: Tailwind CSS with global styles in `src/app/globals.css`.
- **Icons**: Lucide React for modern, consistent iconography.
- **Build And Tooling**: Next.js build pipeline with ESLint for code quality.

## Project Structure

```text
src/
  app/                Route segments and page-level layouts
    admin/            Admin-specific routes
    parent/           Parent-specific routes
    teacher/          Teacher-specific routes
    student/          Student-specific routes
  components/         Shared UI components
  lib/                Mock data and helper utilities
```

## Routes And Screens

### Primary Routes

- `/` - landing page and platform overview
- `/login` - sign in screen
- `/signup` - registration flow
- `/role-selection` - choose a user role
- `/student` - student dashboard
- `/teacher` - teacher dashboard
- `/parent` - parent dashboard
- `/tutor` - tutor dashboard
- `/admin` - admin dashboard
- `/modules` - learning modules catalog
- `/lesson` - lesson experience
- `/quiz` - quiz flow
- `/progress` - progress analytics
- `/rewards` - achievements and rewards
- `/settings` - global settings

### Admin Routes

- `/admin/users` - user management
- `/admin/schools` - school management
- `/admin/settings` - admin settings

### Parent Routes

- `/parent/alerts` - alerts and notifications
- `/parent/attendance` - attendance tracking
- `/parent/progress` - learner progress overview
- `/parent/reports` - reports and summaries
- `/parent/settings` - parent settings
- `/parent/skills` - skill tracking
- `/parent/weak-topics` - weakness insights

### Teacher Routes

- `/teacher/assignments` - assignments dashboard
- `/teacher/attendance` - class attendance
- `/teacher/live` - live session experience
- `/teacher/notifications` - notifications
- `/teacher/practicals` - lab and practical work
- `/teacher/reports` - reports and analytics
- `/teacher/roster` - class roster
- `/teacher/settings` - teacher settings

## Mock Data Strategy

- Mock data lives in `src/lib/mock-data.ts`.
- UI views remain demo-friendly with consistent, deterministic data.
- When adding new flows, extend mock data first to keep screens stable.

## Shared UI System

- Shared UI lives in `src/components` to keep the visual system consistent.
- Use existing components before introducing new variants.
- Keep component styling aligned with the brand palette and dashboard aesthetic.

## Brand And Visual System

- Palette emphasis: royal purple, teal, crimson, marigold, and gold.
- Polished, futuristic education dashboard look and feel.
- Consistent layout rhythm and reusable UI components.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser after the server starts.

## Scripts

- `npm run dev` - run the app in development mode
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run ESLint across the project

## Local Development Workflow

1. Install dependencies.
2. Run the dev server.
3. Choose a role from `/role-selection` to navigate the experience.
4. Use mock data to test UI states and variations.

## Contribution Guidelines

- Keep UI changes aligned with the futuristic education dashboard style.
- Prefer shared components in `src/components` when adding reusable UI.
- Use mock data for demo flows unless a backend is explicitly required.
- If `.next` causes local issues, delete it and rebuild before pushing changes.

## Working With The Team

Use short-lived branches for changes and keep commits focused. A typical GitHub flow looks like this:

```bash
git checkout -b feature/your-change
git status
git add .
git commit -m "Describe your change"
git push origin feature/your-change
```

If you are updating the main branch directly, pull the latest changes first and confirm the app still builds before pushing.

## Verification

Before opening a pull request or pushing to GitHub, run:

```bash
npm run lint
npm run build
```