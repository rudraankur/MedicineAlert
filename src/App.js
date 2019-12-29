import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import Layout from './containers/Layout/Layout';
import InformationDetails from './containers/InformationDetails/InformationDetails';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    	<Header/>
    	<BrowserRouter>
    		<Switch>
	      		<Route path="/search" component={Layout}/>
	      		<Route path="/details" component={InformationDetails}/>
	      		<Redirect from="/" to="/search"/>
	      	</Switch>
      	</BrowserRouter>
    </div>
  );
}

export default App;
