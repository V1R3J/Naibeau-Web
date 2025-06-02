import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "./pages/Home";
import Download from "./pages/Download";
import Partner from "./pages/Partner";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="download" element={<Download />} />
    <Route path="partner" element={<Partner />} />
  </Routes>
  <Footer />
  </BrowserRouter>;
}
