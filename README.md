# Minimal LMS

- GitHub Repository frontend : https://github.com/jbjzeehad/l2-assignment-4
- GitHub Repository backend : https://github.com/jbjzeehad/l2-assignment-3
- Live Deployment frontend: https://librarymanagementsystem-eosin.vercel.app/
- Live Deployment backend: https://librarymanagementsystem-eosin.vercel.app/

## Features

### 1. Book Management

- View all books with pagination and filtering
- Add new books to the library
- Edit existing book details
- Delete books from the system

### 2. Borrow Management

- Borrow books with quantity tracking
- View borrowed books summary
- Automatic availability updates

### 3. Responsive Design

- Fully responsive layout for all device sizes
- Mobile-friendly table/card views
- Accessible navigation

### 4. Modern Tech Stack

- React 18 with TypeScript
- Redux Toolkit with RTK Query
- Tailwind CSS for styling
- React Router v6 for navigation

## Project Structure

```

└─ src
|  |  └─ api
|  |  |  └─ baseApi.ts
|  |  |  └─ bookApi.ts
|  |  |  └─ borrowApi.ts
|  |  └─ components
|  |  |  └─ books
|  |  |  |  └─ BookForm.tsx
|  |  |  |  └─ BookTable.tsx
|  |  |  |  └─ BorrowForm.tsx
|  |  |  └─ layout
|  |  |  |  └─ Footer.tsx
|  |  |  |  └─ Navbar.tsx
|  |  |  └─ ui
|  |  |  |  └─ Button.tsx
|  |  |  |  └─ ConfirmationDialog.tsx
|  |  |  |  └─ Loader.tsx
|  |  |  |  └─ Pagination.tsx
|  |  |  |  └─ Toast.tsx
|  |  └─ hooks
|  |  |  └─ useToast.tsx
|  |  └─ pages
|  |  |  └─ BookDetails.tsx
|  |  |  └─ BookEdit.tsx
|  |  |  └─ BookList.tsx
|  |  |  └─ BookNew.tsx
|  |  |  └─ BorrowBook.tsx
|  |  |  └─ BorrowSummary.tsx
|  |  |  └─ Home.tsx
|  |  └─ routes
|  |  |  └─ index.ts
|  |  └─ store
|  |  |  └─ index.ts
|  |  └─ types
|  |     └─ types.ts
|  └─ App.tsx
|  └─ index.css
|  └─ main.tsx
```

## Available Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run lint:fix`
- `npm run preview`

## Technologies Used

- **Frontend Framework**: React
- **State Management**: Redux Toolkit with RTK Query
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Type Checking**: TypeScript
- **Build Tool**: Vite

## Page List

- /books – Displays a list of all books with options to view, edit, delete, and borrow.
- /create-book – Form interface to add a new book to the system.
- /books/:id – Detailed view of a single book’s information.
- /edit-book/:id – Interface to update an existing book’s details.
- /borrow/:bookId – Form to borrow a selected book
- /borrow-summary – Displays an aggregated summary of all borrowed books.

## Backend Integration

This frontend is designed to work with the [Library Management System](https://librarymanagementsystem-eosin.vercel.app/). Ensure the backend is running and properly configured before starting the frontend.
