import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';

import Navigation from './containers/Navigation'
import Contacts from './components/Contacts'
import Contact from './components/Contact'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <div>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/create" component={Contact} />
          <Route exact path="/contacts/edit/:id" component={Contact} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;