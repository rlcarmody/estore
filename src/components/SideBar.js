import React, { useState, useEffect } from 'react';
import { List, ListItem } from './List';
import styled from 'styled-components';


const SidebarStyle = styled.div`
  box-shadow: 3px 0 5px -2px rgba(0,0,0,.5);
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
  grid-area: sidebar;
  background-color: #FFF;
`

const CategoryHeader = styled.h2`
  font-size: 1.25rem;
  padding: .5rem 1rem 0;
`

export const SideBar = (props) => {

  const [categories, setCategories] = useState([]);

  const setActive = name => {
    setCategories(props.list.map(item => ({ categoryName: item, active: item === name })))
  }

  useEffect(() => {
    setCategories(props.list.map(item => ({ categoryName: item, active: false })))
  }, [])

  return (
    <SidebarStyle>
      <CategoryHeader>
        Filter by Category
      </CategoryHeader>
      <List>
        {categories.map(item => <ListItem active={item.active} onClick={() => setActive(item.categoryName)}>{item.categoryName}</ListItem>)}
      </List>
    </SidebarStyle>
  )
}

export default SideBar;