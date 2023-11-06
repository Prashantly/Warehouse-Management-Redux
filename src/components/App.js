import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Header from '../components/Header';
import Details from "../pages/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
