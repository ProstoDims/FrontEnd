import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./components/Autorization/Authorization";
import Events from "./components/Events/Events";
import Schedule from "./components/Schedule/Schedule";
import Home from "./components/Home/Home";
import Marks from "./components/Marks/marks";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Authorization/>} />
            <Route path="/home" element = {<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/marks" element = {<Marks />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
