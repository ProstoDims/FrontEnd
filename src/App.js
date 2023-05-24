import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./components/Autorization/Authorization";
import Events from "./components/Events/Events";
import Schedule from "./components/Schedule/Schedule";
import Home from "./components/Home/Home";
import Marks from "./components/Marks/marks";
import Help from "./components/Help/Help";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Authorization/>} />
            <Route exact path="/home" element = {<Home/>} />
            <Route exact path="/events" element={<Events/>} />
            <Route exact path="/schedule" element={<Schedule/>} />
            <Route exact path="/marks" element = {<Marks/>} />
            <Route exact path="/help" element = {<Help/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
