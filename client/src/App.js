import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
