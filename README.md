# CMIS - Car Management Information System

Welcome to the **CMIS (Car Management Information System)** frontend repository. This project is a modern, responsive web application built with React, Vite, and TailwindCSS, designed to help car dealerships and fleet managers track vehicle incidents, manage inventory, and optimize operations.

## ✨ Features

- **User Authentication**: Secure registration and login functionality for users.
- **Incident Management**: Create, read, update, and delete incident reports for vehicles.
- **Geolocation**: Add and view precise geolocation (latitude and longitude) for each incident.
- **Interactive Dashboard**: A comprehensive dashboard to view and filter incident reports.
- **Responsive UI**: A clean, professional, and mobile-friendly user interface built with shadcn/ui and custom styles.
- **Stunning Landing Page**: An engaging landing page to attract new users and showcase the platform's benefits.
- **Dark Mode**: A visually appealing dark theme is applied throughout the application.
- **Smooth Animations**: Subtle animations powered by Framer Motion to enhance user experience.

## 🛠️ Tech Stack

This project is built using a modern frontend stack:

- **Framework**: [React 18.2.0](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Styling**: [TailwindCSS 3.3.2](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API
- **Data Persistence**: `localStorage` (Initial) with a clear path to migrate to a backend service like Supabase.

## 🚀 Getting Started



### Prerequisites

- Node.js v20 or higher
- npm (or your preferred package manager)

### Installation & Running Locally

The system handles dependencies and running the development server automatically.

1.  **Dependencies**: `package.json` is monitored, and `npm install` is run automatically when it changes.
2.  **Run Development Server**: The command `npm run dev` is executed automatically, starting the Vite dev server. You can view the live application in the preview window.

### Build for Production

The command `npm run build` is run automatically to create an optimized production build of the application.

## 📂 Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── dashboard/    # Components specific to the dashboard
│   │   ├── landing/      # Components specific to the landing page
│   │   └── ui/           # Generic UI elements (shadcn/ui)
│   ├── contexts/         # React context providers (e.g., AuthContext)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components for each route
│   ├── App.jsx           # Main application component with routing
│   ├── index.css         # Global styles and TailwindCSS directives
│   └── main.jsx          # Application entry point
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── README.md             # This file
└── tailwind.config.js    # TailwindCSS configuration
```

## 📈 Future Enhancements

- **Backend Integration**: Migrate data persistence from `localStorage` to a robust backend service like **Supabase** for features like real-time updates, database storage, and secure user management.
- **Advanced Filtering**: Implement more advanced filtering and sorting options on the dashboard.
- **Reporting & Analytics**: Add a dedicated section for generating and exporting reports.
- **Image Uploads**: Allow users to upload images for incident reports.
- **Notifications**: Implement real-time in-app and email notifications for important events.
