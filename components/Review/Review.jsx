import React from "react";
import { Text, View,StyleSheet } from "react-native";

const Review = () => {
    return (
        <View  >
             {/* <Image
                            source={require("../../assets/Images/uc.jpg")}
                            resizeMode="cover"
                           
                        /> */}
            <Text style={styles.review}>Under construction! </Text>
        </View>
    );
};
const styles = StyleSheet.create({

    review:{
        margin:200,
        color:'red',
        alignSelf: "center",
        fontSize: 20,
        flex: 2,
        padding:100,
        borderColor: "#ccc",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
        
    }
})

export default Review;
