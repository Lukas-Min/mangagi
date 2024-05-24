// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import About from './pages/About';
import AddManga from "./pages/AddManga";
import EditManga from "./pages/EditManga";
import SearchManga from "./pages/SearchManga";
import ViewManga from "./pages/ViewManga";

export const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-manga" element={<AddManga />} />
        <Route path="/edit-manga" element={<EditManga />} />
        <Route path="/view-manga" element={<ViewManga />} />
        <Route path="/search-manga" element={<SearchManga />} />
      </Routes>
    </Router>
  )
}

export default App;