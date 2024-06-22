import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ArticlePage from './Pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/article/:url" element={<ArticlePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
