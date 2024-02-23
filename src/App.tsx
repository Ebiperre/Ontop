import './App.css'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './containers/404Page/404Page';
import SignUpPageContainer from './containers/SignUpPageContainer/SignUpPageContainer';
import SignInPageContainer from './containers/SignInPageContainer/SignInPageContainer';
import HomePageContainer from './containers/HomePageContainer/HomePageContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
<>
<Navbar />

 <Routes>
      <Route path="*" element={<ErrorPage />} />
<Route path="/home" element={<HomePageContainer />}/>

      <Route path="/sign-up" element={<SignUpPageContainer />} />
      <Route path="/sign-in" element={<SignInPageContainer />} />
    </Routes>

</>

   
  )
}

export default App
