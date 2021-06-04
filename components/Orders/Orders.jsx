import React, { useEffect, useState } from "react";
import { Button, Text, View,StyleSheet, } from "react-native";
import { getFoodByID } from "../../assets/data/data";

const Orders = ({ route, navigation }) => {
    const foodId = route?.params?.foodId;
    const [food, setFood] = useState(null);

    useEffect(() => {
        setFood(getFoodByID(foodId));
    }, [foodId]);

    // food object is in the state
    console.log(food);

    return (
        <View style={styles.cardWrapper}>
            <Text style={styles.heading}>Your Order details</Text>
            {foodId ? (
                <>
                    {/* show food details here */}
                    {/* <Image
                                    source={food?.image}
                                    resizeMode="cover"
                                  
                                  
                                /> */}
                   
                   <View style={styles.cardInfo}>
                   <Text style={styles.cardTitle}> Food no {foodId} </Text>
                    <Text style={styles.cards} >Food Name : <Text style={styles.cardTitle}>{food?.title}</Text> </Text>
                    <Text style={styles.cardDetails}>{food?.description} </Text>
                    <Text style={styles.cards} >Price : <Text style={styles.cardTitle}>${food?.price}</Text> </Text>
                   <Button style={styles.button}
                  
                    title="Order Now!"
                    color="#2f4f4f"
                    // accessibilityLabel="Learn more about this purple button"
                    />
                                    </View>
                </>
            ) : (
                <Text style={styles.cardTitle}>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  
    wrapper: {},
   
   

    cardWrapper: {
        marginTop: 100,
        width: "90%",
        alignSelf: "center",
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImageWrapper: {
        flex: 1,
    },
    cardImg: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 100,
        borderColor: "#ccc",
        alignSelf: "center",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 15,
       
    },
    cardDetails: {
        fontSize: 10,
        color: "#444",
    },
    cards: {
        fontSize: 15,
       
    },
    heading:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        color:'#2f4f4f',
        padding:20
        
    },
    // button:{
    //     padding:10,
    //     color:'#2f4f4f',
    // }
});

export default Orders;
