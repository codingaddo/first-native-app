import { View, Text, Image } from "react-native";
import React from "react";

const User = () => {
  return (
    <View style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
      <Image
        source={require("../../assets/images/leo.jpg")}
        style={{
          width: 120,
          height: 120,
          borderRadius: 99,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
        }}
      >
        Addo Michael
      </Text>
      <Text
        style={{
          fontFamily: "outfit-regular",
          fontSize: 20,
        }}
      >
        xyz@gmail.com
      </Text>
    </View>
  );
};

export default User;
