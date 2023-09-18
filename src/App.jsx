import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/HomePages";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
