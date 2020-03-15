import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const CardLayout = styled(Card)`
  display: grid;
  grid-template-areas: 
  "image details price"
  "image details button";
  grid-column-gap: 1rem;
  align-items: center;
  justify-content: start;
  height: 12rem;
  grid-template-columns: 200px 2fr 1fr;
`

const ProductImage = styled.img`
  grid-area: image;
  display: block;
`

const ProductDetails = styled.article`
  grid-area: details;
  box-sizing: border-box;
  height: 100%;
`

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  grid-area: name;
  font-weight: 700;
`

const ProductDescription = styled.p`
  max-height: 7rem;
  max-width: 650px;
  overflow: hidden;
  margin: 0;
`

const Price = styled.h4`
  font-weight: 500;
  font-size: 2rem;
  grid-area: price;
  justify-self: end;
  margin: 0 1rem 0;
`

const CartButton = styled(Button)`
  grid-area: button;
  width: 150px;
  justify-self: end;
  align-self: start;
  margin-right: 1rem;
`

export const ProductListItem = (props) => {

  const { productDetails: { name, description, price, image, productId }, addToCart } = props;

  return (
    <CardLayout>
      <ProductImage src={image} alt={name} />
      <ProductDetails>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description.length < 300 ? description : description.substring(0, 300) + '...'}</ProductDescription>
      </ProductDetails>
      <Price>${price}</Price>
      <CartButton primary onclick={() => addToCart(productId)}>Add to Cart</CartButton>
    </CardLayout>
  )
}

export default ProductListItem;