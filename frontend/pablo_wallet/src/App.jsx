
import './App.css'
import {Form,Input,Button, Label, TextField} from '@heroui/react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/signup'
import SignIn from './pages/signin'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
