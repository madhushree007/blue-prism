import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Pages from './components/pages/Pages';
import Stages from './components/stages/Stages';

const App: React.FC = () => {
  return (
    <Router>
      <main className={styles.container}>
        <Switch>
          <Route path="/pages/:pageId">
            <Stages />
          </Route>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
