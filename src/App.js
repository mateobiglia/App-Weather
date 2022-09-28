import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";


function App() {
  return (
    
    <div className="App">
      <Routes>

        <Route path={"/"} element={<Home />} />        
        <Route exact path="/contact" element={<Contact />} />
      
      </Routes>  
    </div>
  );
}

export default App;
