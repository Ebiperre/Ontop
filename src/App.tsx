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
import SignUpFormStepper from "./containers/SignUpPageContainer/SignUpFormStepper";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import DashBoardHomePage from "./pages/DashboardPages/DashBoardHomePage";
import WalletPage from "./pages/DashboardPages/WalletPage";
import DashBoardSettingsPage from "./pages/DashboardPages/DashBoardSettingsPage";
import DashBoardGiftCardPage from "./pages/DashboardPages/DashBoardGiftCardPage";
import CardDetails from "./containers/DashBoard/DashBoardGiftCardPageContainer/CardDetails";
import DashboardCoinPages from "./pages/DashboardPages/DashboardCoinPage";
import DashboardTransactionPage from './pages/DashboardPages/DashboardTransactionPage'
import DashboardPaymentPage from "./pages/DashboardPages/DashboardPaymentPage";
import WithdrawalPage from "./pages/DashboardPages/WithdrawalPage";
import DashboardBuyPages from "./pages/DashboardPages/DashboardBuyPage";



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
        <Route path="/terms&conditions" element={<TermsAndConditionsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home"></Navigate>} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/dashboard-wallet" element={<WalletPage />} />
        <Route path="/dashboard-home" element={<DashBoardHomePage />} />
        <Route path="/dashboard-buy" element={<DashboardBuyPages />} />
        <Route path="/dashboard-settings" element={<DashBoardSettingsPage />} />
        <Route path="/dashboard-cards" element={<DashBoardGiftCardPage />} />
        <Route path="/dashboard-cards/:CardId" element={<CardDetails />} />
        <Route path="/dashboard-withdraw" element={<WithdrawalPage />} />
        <Route path="/dashboard-buy/:CoinCardId" element={<DashboardCoinPages />} />
        <Route path="/dashboard-transactions" element={<DashboardTransactionPage />} />
        <Route path="/dashboard-transactions/payments" element={<DashboardPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
