import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './containers/404Page/404Page';
import ContactPageContainer from './containers/ContactPageContainer/ContactPageContainer';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './containers/ForgotPassword/ForgotPassword';
import AboutPageContainer from './containers/AboutPageContainer/AboutPageContainer';

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-in/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPageContainer />
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
