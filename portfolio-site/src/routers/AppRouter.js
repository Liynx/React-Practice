import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItemPage';
import ContactPage from '../components/Contact';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItem}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;