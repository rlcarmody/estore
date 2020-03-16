import React from 'react';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: #EFEFEF;
  grid-area: main;
  max-height: calc(100vh - 3rem);
  overflow-y: scroll;
`

const productDetails = {
  image: 'https://picsum.photos/id/119/200/150',
  name: 'Product Name',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  price: '29.99'
}

export const Main = () => {

  return (
    <MainContainer>
      {Array(20).fill(productDetails).map(product => <ProductListItem productDetails={product} />)}
    </MainContainer>
  )
}

export default Main;