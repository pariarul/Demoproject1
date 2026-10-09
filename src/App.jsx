import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Navbar from "./Navbar";

function App() {
  const name="pari"
  return (
    <BrowserRouter>
<Navbar />

      <Routes>
        <Route path="/" element={<Home data={name} />} />
        <Route path="/about" element={<About data={name} />} />
        <Route path="/skill" element={<Skill data={name} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;