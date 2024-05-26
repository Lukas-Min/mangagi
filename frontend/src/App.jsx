import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import AddManga from './pages/AddManga';
import EditManga from './pages/EditManga';
import SearchManga from './pages/SearchManga';
import ViewManga from './pages/ViewManga';

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-manga" element={<AddManga />} />
            <Route path="/edit-manga" element={<EditManga />} />
            <Route path="/view-manga/:oid" element={<ViewManga />} />
            <Route path="/view-manga/:mangaid" element={<ViewManga />} />
            <Route path="/search-manga" element={<SearchManga />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
