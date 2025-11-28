import Profile from "./components/Profile";
import Demo from "./components/Demo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
  
  
  <Router>
   <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>


  );
}

export default App;
