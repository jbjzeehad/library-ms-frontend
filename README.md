# Library Management System (Frontend)

A modern, responsive frontend for a Library Management System built with React, TypeScript, Redux Toolkit, and Tailwind CSS. This application provides an intuitive interface for managing books, tracking borrows, and viewing library statistics.

## Features

- **Book Management**:

  - View all books with pagination and filtering
  - Add new books to the library
  - Edit existing book details
  - Delete books from the system

- **Borrow Management**:

  - Borrow books with quantity tracking
  - View borrowed books summary
  - Automatic availability updates

- **Responsive Design**:

  - Fully responsive layout for all device sizes
  - Mobile-friendly table/card views
  - Accessible navigation

- **Modern Tech Stack**:
  - React 18 with TypeScript
  - Redux Toolkit with RTK Query
  - Tailwind CSS for styling
  - React Router v6 for navigation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rakibul-wdp/minimal-library-management-system.git
   cd minimal-library-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── api/                  # RTK Query API endpoints
├── components/           # Reusable UI components
│   ├── books/            # Book-related components
│   ├── layout/           # Layout components
│   └── ui/               # General UI components
├── pages/                # Page components
├── routes/               # Application routes
├── store/                # Redux store configuration
├── types/                # TypeScript type definitions
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix linting issues
- `npm run preview`: Preview production build

## Technologies Used

- **Frontend Framework**: [React](https://reactjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## Backend Integration

This frontend is designed to work with the [Library Management Backend API](https://library-management-api-gules.vercel.app/). Ensure the backend is running and properly configured before starting the frontend.

## Contact

`rakibul-wdp`
