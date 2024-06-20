import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Intro = ({ business }) => {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="black" />
      </View>
      <Image
        source={{ uri: business?.imageurl }}
        style={{
          width: "100%",
          height: 300,
        }}
      />
      <View
        style={{
          padding: 20,
          marginTop: -20,
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            textTransform: "capitalize",
            fontFamily: "outfit-bold",
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-regular",
          }}
        >
          {business?.address}
        </Text>
      </View>
    </View>
  );
};

export default Intro;
