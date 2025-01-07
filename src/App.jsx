/* eslint-disable no-unused-vars */
import { Button } from './components/ui/button';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import MyJob from './pages/MyJob';

import { ThemeProvider } from "./components/ui/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/jobs',
        element: <JobListing />,
      },
      {
        path: '/job/:id', // Fixed dynamic route syntax
        element: <JobPage />,
      },
      {
        path: '/post-job',
        element: <PostJob />,
      },
      {
        path: '/saved-job',
        element: <SavedJobs />,
      },
      {
        path: '/my-job',
        element: <MyJob />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
