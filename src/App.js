import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { About, Contact, Home, NotFound, Projects } from './pages';
import { Brand, Navbar} from './components';
import { Footer, Header} from './containers';

import './styles/global.scss';

const App = () => {
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;