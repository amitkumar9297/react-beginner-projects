import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Signedup from "./components/signedup";
import Logedin from "./components/Logedin";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video?category=free" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/signup" element={<Signedup />} />
        <Route path="/login" element={<Logedin />} />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
