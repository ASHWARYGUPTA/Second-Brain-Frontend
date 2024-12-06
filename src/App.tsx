import './App.css'
import { ContentPage } from './ContentPage'
import { LandingPage } from './LandingPage'
import { SignInPage } from './SignInPage'
import { SignUpPage } from './SignUpPage'
import { Router,Routes,Route,BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      {/* <LandingPage/> */}
      {/* <ContentPage/> */}
      {/* <SignInPage/> */}
      {/* <SignUpPage/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<ContentPage/>}/>
          <Route path='/signin' element = {<SignInPage/>}/>
          <Route path='/signup' element = {<SignUpPage/>}/>
          <Route path='/landingPage' element = {<LandingPage/>}/>
          <Route path='/' element = {<LandingPage/>}/>
          <Route path='/*' element = {<div className='flex justify-center items-center'>
            OOPS!Wrong Adress
          </div>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
