# 2025 雙城之旅 (Dual City Journey 2025)

一個為上海與香港之旅設計的現代化、行動優先的旅遊行程網頁應用程式。
(A modern, mobile-first Travel Itinerary Web App for a trip to Shanghai and Hong Kong.)

Built with Vue 3, Vite, and Tailwind CSS.

## Project Setup

### 1. Install Dependencies

To get started, you need to have [Node.js](https://nodejs.org/) (v18+) installed.

Open your terminal and run the following command to install the project dependencies:

```bash
npm install
```

### 2. Run the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (the port may vary).

## Building for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

This will generate a `dist` directory with static assets that can be deployed to any static hosting service.

## Deployment to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/).

1.  **Push to GitHub**: Create a new repository on GitHub and push your code.

2.  **Import Project on Vercel**:
    *   Sign up or log in to your Vercel account.
    *   Click "Add New..." -> "Project".
    *   Import the Git repository you just created.

3.  **Configure Project**:
    *   Vercel will automatically detect that you are using Vite.
    *   The **Build Command** should be `npm run build`.
    *   The **Output Directory** should be `dist`.
    *   The **Install Command** should be `npm install`.

4.  **Deploy**: Click the "Deploy" button. Vercel will build and deploy your application, providing you with a public URL.
