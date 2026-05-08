# React Assignment Project

This is a React project built with Vite and TypeScript. The project includes login and signup, routing, main layout, protected routes, reusable toast notifications, Tailwind CSS, Material UI, AG Grid, and a global theme.

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Material UI
- React Hot Toast
- AG Grid
- Git and GitHub

## Project Structure

```txt
src/
  layouts/
    featers/
      auth/
        login/
          loginLayout.tsx
          loginLayout.scss

    main/
      MainLayout.tsx
      MainLayout.scss

    pages/
      dashboard/
        dashboard.tsx
      profile/
        profile.tsx
      settings/
        settings.tsx

  reusable-components/
    toast/
      ToastProvider.tsx
      toastService.ts

  guards/
    ProtectedRoute.tsx
    PublicRoute.tsx

  theme/
    appTheme.ts

  main.tsx
  index.css
```

## Project Features

This project contains a login and signup page. The login page includes a confirmation popup before login. When the user confirms the login, a loading spinner appears for 3 seconds. After that, the user is redirected to the dashboard page.

The project also uses routing to move between pages without refreshing the website. The main routes are `/login`, `/dashboard`, `/profile`, and `/settings`.

The main layout contains the navbar and the `Outlet`. The `Outlet` is used to display the selected page inside the layout, such as Dashboard, Profile, or Settings.

The project also contains route guards. `ProtectedRoute` prevents users from opening dashboard, profile, or settings if they are not logged in. `PublicRoute` prevents logged-in users from going back to the login page.

React Hot Toast is used as a reusable popup notification system. The toast files are placed inside the `reusable-components` folder so they can be used from any page.

The project uses Tailwind CSS and Material UI for styling. Tailwind is used for fast custom styling, while Material UI is used for ready-made components such as buttons, cards, and stacks.

AG Grid is used in the dashboard to display data in a table. The table supports sorting, filtering, pagination, and resizable columns.

The project also includes a global theme. The global theme keeps colors, radius, shadows, and UI styles consistent between Tailwind CSS, Material UI, Toast, and AG Grid.

## Routes

```txt
/           → redirects to /login
/login      → login page
/dashboard  → dashboard page
/profile    → profile page
/settings   → settings page
```

## Login System

When the user logs in successfully, the login state is saved in localStorage:

```ts
localStorage.setItem("isLoggedIn", "true");
```

After login, the user is redirected to:

```txt
/dashboard
```

When the user logs out, the login state is removed:

```ts
localStorage.removeItem("isLoggedIn");
```

## Routing

Routing means moving between pages without refreshing the website.

React Router is used for routing. It connects each URL path to a specific component.

Example:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<LoginLayout />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</BrowserRouter>
```

## Main Layout

The main layout contains the shared structure of the website.

It includes:

- Navbar
- Links to dashboard, profile, and settings
- Logout button
- Outlet

`Outlet` is used to display the selected page inside the layout.

Example:

```tsx
<Outlet />
```

## Route Guards

Guards are used to protect pages and control user access.

### ProtectedRoute

`ProtectedRoute` prevents users from opening dashboard, profile, or settings if they are not logged in.

If the user is not logged in, they are redirected to:

```txt
/login
```

### PublicRoute

`PublicRoute` prevents logged-in users from opening the login page again.

If the user is already logged in, they are redirected to:

```txt
/dashboard
```

## Reusable Toast System

React Hot Toast is used for popup notifications.

The toast system is inside:

```txt
src/reusable-components/toast/
```

It contains:

```txt
ToastProvider.tsx
toastService.ts
```

Toast messages can be used like this:

```ts
showToast.success("Success message");
showToast.warning("Warning message");
showToast.error("Error message");
```

## Global Theme

The global theme is inside:

```txt
src/theme/appTheme.ts
```

It contains shared values such as:

```txt
primary color
success color
warning color
error color
background color
surface color
text color
border radius
box shadow
MUI theme
```

Tailwind theme variables are also defined in:

```txt
src/index.css
```

Example Tailwind usage:

```tsx
<div className="bg-background text-text p-8">
  Dashboard
</div>
```

Example MUI usage:

```tsx
<Button variant="contained" color="success">
  Success
</Button>
```

## Dashboard

The dashboard contains:

- Success button
- Warning button
- Error button
- Toast popup when clicking each button
- AG Grid table for student data

The AG Grid table includes:

- ID
- Name
- Course
- Grade
- Status

AG Grid supports:

- Sorting
- Filtering
- Pagination
- Resizable columns

## File Explanation

### `main.tsx`

This is the entry point of the React project. It contains the routing system, theme provider, guards, and toast provider.

### `loginLayout.tsx`

This file contains the login and signup page. It uses `useState` to switch between login and signup. It uses `useNavigate` to move the user to the dashboard after successful login.

### `MainLayout.tsx`

This file contains the navbar and the main layout. It uses `Outlet` to display dashboard, profile, and settings pages.

### `ProtectedRoute.tsx`

This file protects private pages. If the user is not logged in, it redirects the user to `/login`.

### `PublicRoute.tsx`

This file protects the login page from logged-in users. If the user is already logged in, it redirects the user to `/dashboard`.

### `ToastProvider.tsx`

This file adds the toast popup system globally to the project.

### `toastService.ts`

This file contains reusable toast functions such as success, warning, error, loading, and dismiss.

### `appTheme.ts`

This file contains the global theme. It stores colors, shadows, radius, and MUI theme settings.

### `dashboard.tsx`

This file contains the dashboard page. It includes toast buttons and an AG Grid table.

## Why We Used These Tools

### Why React Router?

React Router is used to move between pages without refreshing the browser.

### Why Guards?

Guards are used to protect routes and control user access.

### Why React Hot Toast?

React Hot Toast is used to show popup notifications in a clean and reusable way.

### Why Tailwind CSS?

Tailwind CSS is used for fast and simple styling using utility classes.

### Why Material UI?

Material UI is used because it provides ready-made React components such as buttons, cards, and layout elements.

### Why AG Grid?

AG Grid is used to display data in a professional table with sorting, filtering, pagination, and resizing.

### Why Global Theme?

The global theme keeps the design consistent across the whole project.

## Installation

Install the project dependencies:

```bash
npm install
```

If needed, install the main libraries manually:

```bash
npm install react-router-dom react-hot-toast
npm install tailwindcss @tailwindcss/vite
npm install @mui/material @emotion/react @emotion/styled
npm install ag-grid-react
```

Bootstrap was removed because this project uses Tailwind CSS and Material UI instead.

```bash
npm uninstall bootstrap
```

## Run the Project

```bash
npm run dev
```

## Build the Project

```bash
npm run build
```

## Git Commands

Check project status:

```bash
git status
```

Add all changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Add routing guards theme toast mui tailwind and ag grid"
```

Push to dev branch:

```bash
git push origin dev
```

## Branches

The project uses two branches:

```txt
main → stable branch
dev  → development branch
```

To switch to dev:

```bash
git switch dev
```

To switch to main:

```bash
git switch main
```

## Exam Explanation

This project is a React application organized using layouts, pages, reusable components, guards, and a global theme.

The login page contains login and signup forms. When the user clicks login, a confirmation popup appears. If the user confirms, a loading spinner appears for 3 seconds, then the user is redirected to the dashboard.

Routing is used to move between pages without refreshing the website. React Router controls which component appears for each URL path.

The main layout contains the navbar and uses `Outlet` to display dashboard, profile, and settings pages.

Guards are used to protect routes. `ProtectedRoute` prevents users from accessing the main pages without login. `PublicRoute` prevents logged-in users from opening the login page again.

React Hot Toast is used as a reusable notification system. Tailwind CSS is used for utility styling, Material UI is used for ready-made components, and AG Grid is used to display table data in the dashboard.

A global theme is used to keep the design consistent across Tailwind, MUI, Toast, and AG Grid.

## Final Summary

This project demonstrates a complete React application structure. It includes authentication layout, main layout, routing, route protection, reusable components, global theme, toast notifications, UI components, and data grid. The project is organized in a clean way so each feature has its own folder and responsibility.
