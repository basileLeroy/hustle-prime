import { useEffect } from 'react'
import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { Header, Footer } from './visitor/components'
import { Error, Landing } from './visitor/pages'
import { Map, Arena, Portal, Gembay, Dungeon } from './visitor/pages/activities'
import { ClanTerritories } from './visitor/pages/clans'
import { AncientSets, Gems, Runes } from './visitor/pages/META'
import { About, Team } from './visitor/pages/about';

import { ReactGA } from 'react-ga'

ReactGA.initialize('G-VNNQ5YPTEZ')

const App = () => {

  const analyticConnection = () => {
    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    })
  }

  return (
    <div className="App">
        {analyticConnection()}
        <Header />
        <div className="App-container">
          <Switch>
              <Route path="/" exact component={ Landing } /> 

              <Route path="/activities/map" exact component={ Map } /> 
              <Route path="/activities/arena" exact component={ Arena } /> 
              <Route path="/activities/portal" exact component={ Portal } /> 
              <Route path="/activities/gembay" exact component={ Gembay } /> 
              <Route path="/activities/dungeon" exact component={ Dungeon } />

              <Route path="/clans/clan-territories" exact component={ ClanTerritories } />

              <Route path="/meta/ancient-sets" exact component={ AncientSets } />
              <Route path="/meta/runes" exact component={ Runes } />
              <Route path="/meta/gems" exact component={ Gems } />

              <Route path="/about" exact component={ About } />
              <Route path="/ourteam" exact component={ Team } />

              <Route path="/404" component={ Error } />
              <Redirect to="/404" />
          </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default App;
