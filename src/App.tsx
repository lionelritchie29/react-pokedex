/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import 'twin.macro'
import PokemonDetail from './Pages/PokemonDetail'
import tw from 'twin.macro'
import Favorites from './Pages/Favorites'

const Container = tw.div`w-11/12 mx-auto py-3`

function App() {
  return (
    <div tw="bg-gray-900 min-h-screen">
      <Router>
        <Navbar />

        <Container>
            <Switch>
              <Route path="/favorites">
                  <Favorites />
              </Route>
              <Route path="/:name">
                  <PokemonDetail />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
            </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
