import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../../assets/images/leo.jpg")}
          style={{
            width: 45,
            height: 45,
            borderRadius: 99,
          }}
        />
        <View>
          <Text style={{ color: "white" }}>Welcome</Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: "outfit-medium",
              color: "white",
            }}
          >
            Addo Michael
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          //   padding: 10,
          paddingHorizontal: 10,
          backgroundColor: "white",
          borderRadius: 10,
          marginVertical: 10,
          marginTop: 15,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.primaryColor} />
        <TextInput
          placeholder="Search..."
          style={{
            fontSize: 16,
            fontFamily: "outfit-regular",

            padding: 10,
            width: "90%",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
