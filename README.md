# React TypeScript Assignment

This project is a React TypeScript application created with Vite.  
It includes a Bootstrap navbar and a Material UI slide section.

---

## Project Features

- React with TypeScript
- Bootstrap navbar
- Material UI slide section
- SCSS styling
- GitHub version control

---

## Steps to Create the Project

First, create a new React TypeScript project using Vite:

```bash
npm create vite@latest assignment
```

Choose:

```text
React
TypeScript
```

Then enter the project folder:

```bash
cd assignment
```

Install the project dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## Install Bootstrap

Bootstrap was used to create the navbar.

```bash
npm install bootstrap
```

Then Bootstrap was imported in `src/main.tsx`:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

---

## Install Material UI

Material UI was used to create the slide UI section.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

## Install Sass

Sass was installed to use `.scss` files.

```bash
npm install sass
```

---

## Project Structure

```text
src/
  components/
    navbar/
      navbar.tsx
      navbar.scss
    slideUI/
      slide.tsx
      slide.scss
  App.tsx
  main.tsx
```

---

## Navbar Component

The navbar was created inside:

```text
src/components/navbar/
```

Files:

```text
navbar.tsx
navbar.scss
```

The navbar uses Bootstrap classes for layout and styling.

---

## Slide UI Component

The slide section was created inside:

```text
src/components/slideUI/
```

Files:

```text
slide.tsx
slide.scss
```

The slide section uses Material UI components such as:

```text
Box
Container
Typography
Button
```

---

## Use Components in App.tsx

Both components were imported and used in `src/App.tsx`:

```tsx
import Navbar from './components/navbar/navbar'
import Slide from './components/slideUI/slide'

function App() {
  return (
    <>
      <Navbar />
      <Slide />
    </>
  )
}

export default App
```

---

## Push Project to GitHub

Initialize Git:

```bash
git init
```

Add all files:

```bash
git add .
```

Commit the project:

```bash
git commit -m "Initial commit"
```

Connect the project to GitHub:

```bash
git remote add origin https://github.com/mohamadkabbout/assignment.git
```

Rename the branch to main:

```bash
git branch -M main
```

Push the project:

```bash
git push -u origin main
```

---

## Save New Changes to GitHub

After editing files, use:

```bash
git add .
git commit -m "Add Bootstrap navbar and MUI slide"
git push
```

---

## Technologies Used

- React
- TypeScript
- Vite
- Bootstrap
- Material UI
- Sass
- GitHub

---

## Repository Link

```text
https://github.com/mohamadkabbout/assignment
```