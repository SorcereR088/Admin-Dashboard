import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Pages from './pages/Pages'

function App() {
  return (
    <>
    <div className='grid gap-4 grid-cols-[350px,_1fr]'>
      <Sidebar />
      <Pages/>
    </div>

    </>

  );
}

export default App;
