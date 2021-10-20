import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/restaurants'>
          <Restaurants />
        </Route>

        <Route exact path='/foods'>
          <Foods />
        </Route>

        <Route exact path='/orders'>
          <Orders />
        </Route>
        <Route
          exact
          path='/restaurants/:restaurantsId/foods'
          //<Foods match={match} />について
          ///あたいを送る際は文字以外はかっこ必要
          //match={paramas:{restaurant_id:1}}
          //props={match:{paramas:{restaurant_id:1}}}
          //render={({ match })について
          //match={paramas:{restaurant_id:1}}}を扱う際はこの書き方で始まる
          render={({ match }) => <Foods match={match} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
