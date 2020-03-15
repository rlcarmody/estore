import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  background-color: ${({ primary }) => primary ? '#296800' : '#FFF'};
  color: ${({ primary }) => primary ? '#FFF' : '#296800'};
  padding: 0 .5rem;
  min-width: 7rem;
  height: 3rem;
  border: 2px solid #296800;
  box-shadow: 2px 2px 3px -2px rgba(0,0,0,.5);
  border-radius: .25rem;
  font-family: 'Martel Sans', sans-serif;
  font-size: 1.1rem;
  &:hover {
    background-color: ${({ primary }) => primary ? lighten(.1, '#296800') : '#FFF'};
    border-color: ${lighten(.1, '#296800')};
    color: ${({ primary }) => primary ? '#FFF' : lighten(.1, '#296800')};
    cursor: pointer;
  }
`;

export default Button