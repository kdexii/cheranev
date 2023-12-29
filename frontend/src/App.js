import "./styles/main.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";
import {Login} from "./components/auth/login/Login";
import {Profile} from "./components/auth/profile/Profle";
import {Logout} from "./components/auth/Logout";
function App() {
  return (
      <div className="App">
          <Router>
              <ScrollToTop></ScrollToTop>
              <Navbar></Navbar>
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/projects' element={<Projects/>}></Route>
                  <Route path='/project/:id' element={<Project/>}></Route>
                  <Route path='/contacts' element={<Contacts/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/logout' element={<Logout/>}></Route>
                  <Route path='/profile' element={<Profile/>}></Route>
              </Routes>
              <Footer></Footer>
          </Router>

      </div>
  );
}

export default App;
