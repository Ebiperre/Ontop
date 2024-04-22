import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './containers/404Page/404Page';
import ContactPage from "./pages/LandPages/ContactPage";
import HomePage from './pages/LandPages/HomePage';
import SignInPage from './pages/LandPages/SignInPage';
import SignUpPage from './pages/LandPages/SignUpPage';
import ForgotPassword from './containers/LandingPagesContainer/ForgotPassword/ForgotPassword';
import ServicePage from './pages/LandPages/ServicePage';
import AboutPage from './pages/LandPages/AboutPage';
import SignUpFormStepper from "./containers/LandingPagesContainer/SignUpFormStepperContainer/SignUpFormStepper";
import TermsAndConditionsPage from "./pages/LandPages/TermsAndConditionsPage";
import DashBoardHomePage from "./pages/DashboardPages/DashBoardHomePage";
import WalletPage from "./pages/DashboardPages/WalletPage";
import DashBoardSettingsPage from "./pages/DashboardPages/DashBoardSettingsPage";
import DashBoardGiftCardPage from "./pages/DashboardPages/DashBoardGiftCardPage";
import CardDetails from "./pages/DashboardPages/DashboardCardDetailsPage";
import DashboardCoinPages from "./pages/DashboardPages/DashboardCoinPage";
import DashboardTransactionPage from './pages/DashboardPages/DashboardTransactionPage'
import DashboardPaymentPage from "./pages/DashboardPages/DashboardPaymentPage";
import WithdrawalPage from "./pages/DashboardPages/WithdrawalPage";
import DashboardBuyPages from "./pages/DashboardPages/DashboardBuyPage";
import DashboardSellPage from "./pages/DashboardPages/DashboardSellPage"
import SellCoinDataContianer from "./pages/DashboardPages/DashboardSellCoinDataPage";


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
        <Route path="/dashboard/wallet" element={<WalletPage />} />
        <Route path="/dashboard/home" element={<DashBoardHomePage />} />
        <Route path="/dashboard/buy" element={<DashboardBuyPages />} />
        <Route path="/dashboard/sell" element={<DashboardSellPage />} />
        <Route path="/dashboard/sell/:sellCoinCardId" element={<SellCoinDataContianer />} />
        <Route path="/dashboard/settings" element={<DashBoardSettingsPage />} />
        <Route path="/dashboard/cards" element={<DashBoardGiftCardPage />} />
        <Route path="/dashboard/cards/:CardId" element={<CardDetails />} />
        <Route path="/dashboard-withdraw" element={<WithdrawalPage />} />
        <Route path="/dashboard/buy/:CoinCardId" element={<DashboardCoinPages />} />
        <Route path="/dashboard/transactions" element={<DashboardTransactionPage />} />
        <Route path="/dashboard/payments" element={<DashboardPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
