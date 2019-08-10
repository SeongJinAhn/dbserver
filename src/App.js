import React from 'react';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Member from './components/Members';
import Research from './components/Researchs';
import Publication from './components/Publications';
import Photo from './components/Photo';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component = {Home} />
        <Route path = "/members" component = {Member} />
        <Route path = "/researchs" component = {Research} />
        <Route path = "/publications" component = {Publication} />
        <Route path = "/photos" component = {Photo} />
      </div>
    </BrowserRouter>
  )
}

export default App;
