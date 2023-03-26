import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <div className='App'>
          <Header/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
