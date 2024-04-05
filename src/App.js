import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Header from "./components/Header/Header";
import { motion } from "framer-motion"
import Cursor from "./components/Cursor/Cursor";


function App() {
  return (
    <div className="App">
      <Cursor/>
      <div className="App-layout">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Work" element={<Work />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
