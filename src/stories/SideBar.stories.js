import React from 'react';
import { SideBar } from '../components'; 

export default {title: 'SideBar', component: SideBar};

const categories = ['Dark', 'Light', 'Heavy', 'Wet', 'Dry']

export const CategoryFilter = () => <SideBar list={categories} />