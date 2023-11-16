
import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';

import Ordertab from './Ordertab/Ordertab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza','soup', 'dessert', 'drinks'];
    const{ category } = useParams();
    const intialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(intialIndex);
    const[menu] = useMenu();
    
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={"orderd food"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <Ordertab items={salad}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={pizza}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={soup}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={dessert}></Ordertab>
                </TabPanel>
                <TabPanel>
                <Ordertab items={drinks}></Ordertab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;