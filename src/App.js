import './App.css';
import { Route, Switch} from 'react-router-dom'
import { Header, Footer } from './visitor/components'
import { Landing } from './visitor/pages'
import { Map, Arena, Portal, Gembay, Dungeon } from './visitor/pages/activities'
import { ClanTerritories } from './visitor/pages/clans'
import { AncientSets } from './visitor/pages/META'

const App = () => {
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
          </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default App;
