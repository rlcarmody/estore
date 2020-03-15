import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  padding: .5rem .5rem .5rem 2rem;
  background-color: ${({active}) => active ? '#296800' : '#FFF' };
  color: ${({ active }) => active ? '#FFF' : '#444'};
  font-family: 'Martel Sans', sans-serif;
  &:hover {
    cursor: default;
  }
  
`