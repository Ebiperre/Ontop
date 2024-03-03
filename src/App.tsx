import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-up/steps" element={<SignUpFormStepper />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home"></Navigate>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
