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
import ProtectedRoute from './components/ui/protected-routes';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element:(
         <ProtectedRoute>
              <Onboarding/>
         </ProtectedRoute>
        ),
      },
      {
        path: '/jobs',
        element: (
          <ProtectedRoute>
               <JobListing/>
          </ProtectedRoute>
         ),
      },
      {
        path: '/job/:id', // Fixed dynamic route syntax
        element: (
          <ProtectedRoute>
               <JobPage/>
          </ProtectedRoute>
         ),
      },
      {
        path: '/post-job',
        element: (
          <ProtectedRoute>
               <PostJob/>
          </ProtectedRoute>
         ),
      },
      {
        path: '/saved-job',
        element: (
          <ProtectedRoute>
               <SavedJobs/>
          </ProtectedRoute>
         ),
      },
      {
        path: '/my-job',
        element: (
          <ProtectedRoute>
               <MyJob/>
          </ProtectedRoute>
         ),
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
