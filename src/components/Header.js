import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import Logo from './Logo';
import Row from './Row';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const StyledHeader = styled.header`
  background-color: #296800;
  grid-area: header;
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  color: #FFFFFF;
  margin: 0;
  display: inline;
  padding: .5rem;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Row>
        <Logo width="2rem" src={logo} alt="logo" />
        <Title>
          E-Store
        </Title>
      </Row>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{color: 'white', padding: '1rem'}}/>
    </StyledHeader>)
}

export default Header