import React from 'react';
import { Button } from 'semantic-ui-react'
import {Link,BrowserRouter, HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import MenuMatch from './MenuMatch'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component = {Home} />
        <Button><Link to = "/menu/members">Member</Link></Button>
        <Button><Link to = "/menu/researchs">Research</Link></Button>
        <Button><Link to = "/menu/publications">Publication</Link></Button>
        <Button><Link to = "/menu/photos">Photo</Link></Button>
      </div>
      <div>
        <Route path="/menu/:name" component={MenuMatch} />
      </div>
    </BrowserRouter>
  )
}

export default App;
