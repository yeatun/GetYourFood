import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { getFoodByID } from "../../assets/data/data";

const Orders = ({ route, navigation }) => {
    const foodId = route?.params?.foodId;
    const [food, setFood] = useState(null);

    useEffect(() => {
        setFood(getFoodByID(foodId));
    }, [foodId]);

    // food object is in the state

    return (
        <View>
            {foodId ? (
                <>
                    {/* show food details here */}
                    <Text>You are ordering food {foodId} </Text>
                    <Text>You are ordering food {food.title} </Text>
                    <Text>You are ordering food {food.description} </Text>
                </>
            ) : (
                <Text>
                    {/* if there is no food selected user will get this message and pressign the button will redirect to the HOme page 
                    // TODO: style the button */}
                    Please Select a food from{" "}
                    <Button
                        onPress={() => navigation.navigate("Home")}
                        title="Home"
                    />{" "}
                    tab
                </Text>
            )}
        </View>
    );
};

export default Orders;
