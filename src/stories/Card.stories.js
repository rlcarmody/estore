import React from 'react';
import { ProductListItem } from '../components';

export default {title: 'Product Card', component: ProductListItem}

export const ProductListCard = () => {
  const productDetails = {
    image: 'https://picsum.photos/id/119/200/150',
    name: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '29.99'
  }
  return <ProductListItem productDetails={productDetails} />
}