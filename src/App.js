import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Base from './components/Base/Base';
import Dialog from './components/Dialog/Dialog';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

const name = "World";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Base name={name} />} />
          <Route path="/dialogs/1" element={<Dialog name="Dialog1" />} />
          <Route path="/dialogs/2" element={<Dialog name="Dialog2" />} />
        </Routes> 
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
