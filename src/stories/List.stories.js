import React from 'react';
import { List, ListItem } from '../components';

export default { title: 'List', component: List }

const items = [
  {
    categoryName: 'Category 1',
    active: false
  },
  {
    categoryName: 'Category 2',
    active: false
  },
  {
    categoryName: 'Category 3',
    active: true
  },
  {
    categoryName: 'Category 4',
    active: false
  },
]

export const ListWithListItems = () => (
  <List>
    {items.map(({active, categoryName}) => <ListItem active={active}>{categoryName}</ListItem>)}
  </List>
)
