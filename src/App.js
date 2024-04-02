import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
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
