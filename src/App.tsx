import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './containers/404Page/404Page';
import ContactPage from "./pages/ContactPage";
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './containers/ForgotPassword/ForgotPassword';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import TermsAndConditions from "./containers/TermsAndConditions/TermsAndConditions";
import SignUpFormStepper from "./containers/SignUpPageContainer/SignUpFormStepper";


const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-up/steps",
    element: <SignUpFormStepper />,
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
    element: <AboutPage />
  },
  {
    path: "/service",
    element: <ServicePage />
  },
  {
    path: "/terms&conditions",
    element: <TermsAndConditions />
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
