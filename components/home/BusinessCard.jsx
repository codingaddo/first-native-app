import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const BusinessCard = ({ business }) => {
  return (
    <View
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
      }}
    >
      <Image
        source={{ uri: business?.imageurl }}
        style={{
          width: 200,
          height: 130,
          borderRadius: 5,
          //   borderWidth: 2,
          //   backgroundColor: "white",
          //   alignSelf: "center",
        }}
      />
      <View style={{ marginTop: 7 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            textAlign: "center",
            color: Colors.Gray,
            fontSize: 13,
          }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Image
              source={require("../../assets/images/star.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Text style={{ fontFamily: "outfit-regular" }}>4.5</Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit-regular",
              backgroundColor: Colors.primaryColor,
              padding: 4,
              color: "white",
              fontSize: 12,
              borderRadius: 5,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BusinessCard;
