import React from 'react';
import Home from '../Home';
import Courses from './courses/Courses';
import {Route, Routes } from 'react-router-dom';
import Signup from './Component/signup';
function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Course" element={<Courses />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
    </>
  )
}

export default App
