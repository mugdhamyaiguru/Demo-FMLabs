# FutureMinds AI Guru

FutureMinds AI Guru is a polished Next.js learning platform demo built for modern education experiences. It showcases role-based journeys for students, teachers, parents, tutors, and administrators, along with lesson flows, quizzes, progress tracking, rewards, and AI-assisted learning screens.

This repository is designed as a collaborative project for team members. Most interactions are demo-first and powered by mock data so the UI can be explored safely without requiring a backend.

## Highlights

- Futuristic education dashboard UI with a consistent visual system.
- App Router structure with reusable shared components in `src/components`.
- Separate screens for auth, role selection, dashboards, lessons, quizzes, progress, rewards, and settings.
- Mock data and demo-only interactions for fast iteration.
- TypeScript + Tailwind CSS setup for maintainable UI development.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons

## Project Structure

```text
src/
	app/
		admin/
		lesson/
		login/
		modules/
		parent/
		progress/
		quiz/
		rewards/
		role-selection/
		settings/
		signup/
		student/
		teacher/
		tutor/
	components/
	lib/
```

## Available Pages

- `/` - landing page
- `/login` - sign in screen
- `/signup` - registration screen
- `/role-selection` - choose a user role
- `/student` - student dashboard
- `/teacher` - teacher dashboard
- `/parent` - parent dashboard
- `/tutor` - tutor dashboard
- `/admin` - admin dashboard
- `/modules` - learning modules
- `/lesson` - lesson experience
- `/quiz` - quiz flow
- `/progress` - progress analytics
- `/rewards` - achievements and rewards
- `/settings` - app settings

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

## Notes For Contributors

- Keep UI changes aligned with the existing futuristic education dashboard style.
- Prefer shared components in `src/components` when adding reusable UI.
- Use mock data for demo flows unless a real backend is intentionally introduced.
- If `.next` causes local issues, delete it and rebuild before pushing changes.

## Verification

Before opening a pull request or pushing to GitHub, run:

```bash
npm run lint
npm run build
```