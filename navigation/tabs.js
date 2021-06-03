import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homepage from '../components/Homepage/Homepage';
import Products from '../components/Products/Products';
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Products') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="Products" component={Products} />
        </Tab.Navigator>
    );
}

export default HomeTabs