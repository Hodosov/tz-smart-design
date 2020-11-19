import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { AddProduct } from './components/AddProduct'
import { FilterProduct } from './components/FilterProduct'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

function App() {

  return (
    <Wrapper>
      <Switch>
        <Route exact path='/' component={FilterProduct} />
        <Route path='/products' component={AddProduct} />
        <Redirect to='/' />
      </Switch>
    </Wrapper>
  );
}

export default App;
