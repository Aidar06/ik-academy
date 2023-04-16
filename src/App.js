import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import AboutOne from "./pages/About/AboutOne";
import Burger from "./components/Burger/burger";
import {useState} from "react";

function App() {

    const [burger,setBurger] = useState(false)

  return (
      <div className='App'>
          <Header setBurger={setBurger} burger={burger}/>
          <Burger setBurger={setBurger} burger={burger}/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<AboutOne/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
