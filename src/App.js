import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import About from "./pages/About/About";

function App() {
  return (
      <div className='App'>
          <Header/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<About/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
