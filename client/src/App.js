import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { FilterProductPage } from './pages/FilterProductPage'
import { AddProductPage } from './pages/AddProductPage'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

function App() {

  return (
    <Wrapper>
      <Switch>
        <Route exact path='/' component={FilterProductPage} />
        <Route path='/products' component={AddProductPage} />
        <Redirect to='/' />
      </Switch>
    </Wrapper>
  );
}

export default App;
