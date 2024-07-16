import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  );
}

export default App;
