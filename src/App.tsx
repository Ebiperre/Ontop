import './App.css'
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './containers/404Page/404Page';

function App() {

  return (
    <Routes>
      {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
