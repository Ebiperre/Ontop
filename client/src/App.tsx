import './App.css'
import logo from '/../client/src/assets/icons/logo_with_bottom_text.svg'
import logo2 from '/../client/src/assets/icons/logo_with_left_text.svg'
import logo3 from '/../client/src/assets/icons/logo_without_text.svg'

function App() {

  return (
    <div className='flex'>
      <img src={logo} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
    </div>
  )
}

export default App
