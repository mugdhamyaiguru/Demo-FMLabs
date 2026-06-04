# FutureMinds AI Guru

FutureMinds AI Guru is a polished, high-fidelity Next.js learning platform demo designed for modern educational teams. It showcases role-based journeys across students, teachers, parents, tutors, and administrators, with immersive, interactive flows for lessons, quizzes, progress analytics, rewards, and AI-assisted learning.

The platform is designed with a premium, futuristic aesthetic incorporating modern glassmorphism, dynamic gradients, dark/light modes, and responsive custom layouts.

---

## 🌟 Key Features & Experience Flow

This app is structured around role-based workflows and dynamic educational hubs:

1. **Futuristic Landing Page (`/`)**:
   - Immersive fluid-motion interactive background with smooth web particle systems.
   - High-fidelity product showcase displaying role-aware cards and floating dashboard previews.

2. **Streamlined Dashboards**:
   - **Student Dashboard (`/student`)**: Focuses on momentum and task focus. Includes achievements, current streak metrics, and direct links to active modules.
   - **Parent Dashboard (`/parent`)**: Clean layout grid presenting child attendance, alerts, reports, and skill tracking profiles without clutter.
   - **Teacher Dashboard (`/teacher`)**: Single-page snapshot of rosters, assignment completion rates, practical logs, and quick actions.

3. **Dynamic Lesson Workspace (`/lesson`)**:
   - **2-Column Layout**: Built to replace cramped 3-column layouts, utilizing a wide Left Learning Canvas and a Right Helper Sidebar.
   - **Immersive Header Cover**: Rich dark-purple mesh gradient card detailing module subject, difficulty, estimated time, and XP rewards.
   - **Interactive Media Player**: Custom aspect-video player sandbox featuring media scrubbing trackers, sound toggles, fullscreen controls, and a pulsing playback interface.
   - **Right-Aligned Actions**: Compact action buttons located right beneath the player to focus maximum visual emphasis on the video content.
   - **Lesson Path Stepper**: Connected vertical stepper stepper detailing completed steps (with checkmarks), active steps (pulsing nodes), and upcoming steps.
   - **Spacious Step Concept Cards**: 3-column instruction layout featuring glowing borders, shadows, and step markers.

4. **Progress Analytics (`/progress`)**:
   - Stretched full-width learning charts showing monthly XP and performance metrics.
   - Simplified Calendar Streak Heatmap with custom tooltips, column headings (`Mon` - `Sun`), and color range scale legends.

5. **Consolidated Settings (`/settings` & `/teacher/settings`)**:
   - Merged accessibility options into a single unified **Appearance & Accessibility** card to declutter menus and minimize cognitive load.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 with App Router for structured, file-based routing.
- **UI Library**: React 19 for component-based UI development.
- **Language**: TypeScript for type safety and maintainable UI logic.
- **Styling**: Tailwind CSS with global styles in `src/app/globals.css`.
- **Icons**: Lucide React for modern, consistent iconography.
- **State & Data**: Static JSON mock data store in `src/lib/mock-data.ts` for instant preview and backend-less client-side testing.

### Project Directory Structure

```text
src/
  app/                Route segments and page-level layouts
    admin/            Admin-specific management routes
    parent/           Parent-specific monitoring routes
    teacher/          Teacher-specific class management routes
    student/          Student-specific dashboard
    lesson/           Dynamic lesson detail workspace
    modules/          Learning catalog modules
    tutor/            AI Tutor workspace
    progress/         Analytics dashboard
    rewards/          Rewards list
    settings/         Consolidated settings panel
  components/         Shared visual components & Page shells
  lib/                Deterministic mock data configurations
```

---

## 🚀 Getting Started

To install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. Navigating through `/role-selection` allows you to jump between different role experiences.

---

## 📂 Git & Local Workflow

Before committing changes, confirm the project compiles and lint rules pass:

```bash
npm run lint
npm run build
```

### Direct Commit Workflow:

If push access is enabled on the main branch, always pull updates first to prevent conflicts:

```bash
git pull origin main
git add .
git commit -m "feat: [describe your change]"
git push origin main
```

### Feature Branch Workflow:

For collaborative workflows, push to short-lived feature branches:

```bash
git checkout -b feature/your-change
git status
git add .
git commit -m "feat: [describe your change]"
git push origin feature/your-change
```