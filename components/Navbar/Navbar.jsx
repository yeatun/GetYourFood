import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeTabs from "../../navigation/tabs";

const Navbar = () => {
    return (
        <NavigationContainer>
            <HomeTabs />
        </NavigationContainer>
    );
};

export default Navbar;
