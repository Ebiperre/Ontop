import './App.css'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './containers/404Page/404Page';
import SignUpPageContainer from './containers/SignUpPageContainer/SignUpPageContainer';

function App() {

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/sign-up" element={<SignUpPageContainer />} />
    </Routes>
  )
}

export default App
