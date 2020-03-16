import React from 'react';
import styled from 'styled-components';
import { Main, Header, SideBar } from './components';

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "header header"
  "sidebar main";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 3rem 1fr;
`;

const categories = ['Dark', 'Light', 'Heavy', 'Wet', 'Dry']

const App = () => (
  <AppContainer>
    <Header />
    <SideBar list={categories} />
    <Main />
  </AppContainer>
)

export default App;
