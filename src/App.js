import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Header, Footer } from './visitor/components'
import { Error, Landing } from './visitor/pages'
import { Map, Arena, Portal, Gembay, Dungeon } from './visitor/pages/activities'
import { ClanTerritories } from './visitor/pages/clans'
import { AncientSets, Gems, Runes } from './visitor/pages/META'
import { About, Discord } from './visitor/pages/about';
import useGaTracker from './useGaTracker'
import CookieConsent from "react-cookie-consent";

const App = () => {
  useGaTracker();
  return (
    <div className="App">
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
              <Route path="/discord" exact component={ Discord } />

              <Route path="/404" component={ Error } />
              <Redirect to="/404" />
          </Switch>
        </div>
        <Footer />
        <CookieConsent 
          buttonStyle={{ color: "#4e503b", fontSize: "18px", }}
          style={{ background: "#2B373B", whidh: "100vw", height: "75px",textAlign: "center"}}
          expires={150}
        ><span className="text-center">This website uses cookies to enhance the user experience.</span></CookieConsent>
    </div>
  );
}

export default App;
