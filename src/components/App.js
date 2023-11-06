import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Header from '../components/Header';
import Details from "../pages/Details";

function App() {
  return (
    <>
      {/* Header component that appears on all pages */}
      <Header />
      <Routes>
        {/* Route for displaying details of a specific warehouse using the "id" parameter */}
        <Route path="/details/:id" element={<Details />} />

        {/* Default route for the home page (list of warehouses) */}
        <Route path="/" element={<Home />} />

        {/* Route for handling any undefined routes, displays the NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

