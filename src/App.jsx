import React from "react";
import Header from "./components/Header.tsx";
import Menu from "./pages/Menu.tsx";
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Header/>
        <Routes>
          <Route path="/" element={<Menu/>}>
            {/* <Route path="/:id" element={<></>}/> */}
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
