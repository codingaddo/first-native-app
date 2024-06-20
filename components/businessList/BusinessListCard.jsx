import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const BusinessListCard = ({ business }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/businessDetail/" + business.id)}
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Image
        source={{ uri: business?.imageurl }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          gap: 7,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            textTransform: "capitalize",
            fontSize: 20,
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            textTransform: "capitalize",
            fontSize: 15,
            color: Colors.Gray,
          }}
        >
          {business?.address}
        </Text>
        {/* <Text>{business?.contact}</Text> */}
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
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListCard;
