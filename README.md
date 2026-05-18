# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Employee Management System

A role-based Employee Management System built using React, Context API, and LocalStorage.

This project allows admins to assign tasks to employees and employees to manage their assigned tasks through different task states.

---

## Features

### Admin Dashboard
- Create and assign tasks to employees
- View all employees
- Track:
  - New Tasks
  - Accepted Tasks
  - Completed Tasks
  - Failed Tasks

### Employee Dashboard
- Accept assigned tasks
- Mark tasks as completed
- Mark tasks as failed
- View task statistics in real time

### React Features Used
- React Components
- Context API
- Props
- State Management
- Conditional Rendering
- Dynamic UI Rendering

### Storage
- LocalStorage used for persistence

---


# Tech Stack

- React.js
- Tailwind CSS
- Context API
- LocalStorage
- JavaScript (ES6)

---

# Folder Structure

```bash
src/
 ├── components/
 ├── context/
 ├── utils/
 ├── App.jsx
 └── main.jsx
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/employee-management-system.git
```

Move into project folder:

```bash
cd employee-management-system
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Future Improvements

- Backend Integration
- Authentication System
- AI Task Generator
- Database Support
- Email Notifications
- Task Priority Levels

---

# Live Demo

Add your Vercel deployment link here after deployment.

Example:

```bash
https://employee-management-system.vercel.app
```

---



