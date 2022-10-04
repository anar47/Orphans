import React, {useEffect, useState} from 'react';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Elementary from './pages/Elementary';
import Intermediate from './pages/Intermediate';
import UpperIntermediate from './pages/UpperIntermediate';
import Auth from './components/Auth';
import Quiz from './pages/Quiz';

function App() {


  return (
    <div className='bg-stone-50 h-screen'>
      <Navbar />
      <div className='container mx-auto'>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Quiz/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
