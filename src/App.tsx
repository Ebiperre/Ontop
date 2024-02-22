import './App.css'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './containers/404Page/404Page';
import SignUpPageContainer from './containers/SignUpPageContainer/SignUpPageContainer';
import SignInPageContainer from './containers/SignInPageContainer/SignInPageContainer';

function App() {

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/sign-up" element={<SignUpPageContainer />} />
      <Route path="/sign-in" element={<SignInPageContainer />} />
    </Routes>
  )
}

export default App
