import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './containers/404Page/404Page';
import SignUpPageContainer from './containers/SignUpPageContainer/SignUpPageContainer';
import SignInPageContainer from './containers/SignInPageContainer/SignInPageContainer';
import ContactPageContainer from './containers/ContactPageContainer/ContactPageContainer';



const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpPageContainer />
  },
  {
    path: "/sign-in",
    element: <SignInPageContainer />
  },
  {
    path: "/contact-Us",
    element: <ContactPageContainer />
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
