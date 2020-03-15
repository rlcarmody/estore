import styled from 'styled-components';

export const Card = styled.div`
  width: ${({width}) => width || '98%'};
  box-shadow: 3px 3px 4px -2px rgba(0,0,0,.5);
  padding: 1rem;
  margin: .5rem .5rem 0;
  box-sizing: border-box;
  background-color: #FFF;
`
export default Card;