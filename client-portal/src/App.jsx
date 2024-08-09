import './App.scss'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './Landing-page/components/Header'
import Hero from './Landing-page/components/Hero'
import Banner from './Landing-page/components/Banner'
import Menu from './Landing-page/components/Menu'
import Featureblock from './Landing-page/components/Featureblock'
import Footer from './Landing-page/components/Footer'
import Contactus from './Landing-page/components/ContactUs'
import LandingPage from './Landing-page/components/LandingPage'
import FoodDetail from './Landing-page/components/FoodDetail'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/hero' element={<Hero />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/baner' element={<Banner />}></Route>
          <Route path='/featue-block' element={<Featureblock />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/contact-us' element={<Contactus />}></Route>
          <Route path='/food/:id' element={<FoodDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
