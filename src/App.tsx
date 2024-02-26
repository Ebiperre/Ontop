import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './containers/404Page/404Page';
import ContactPageContainer from './containers/ContactPageContainer/ContactPageContainer';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpPage />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/contact-us",
    element: <ContactPageContainer />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
