import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import React from "react";
import { getBackgroundColorAsync } from "expo-system-ui";
import User from "@/components/Profile/User";
import MenuList from "@/components/Profile/MenuList";

const profile = () => {
  return (
    <ScrollView style={{ padding: 20, paddingTop: 50 }}>
      <StatusBar style={{ getBackgroundColorAsync }}></StatusBar>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          textTransform: "capitalize",
        }}
      >
        profile
      </Text>
      <User />
      <MenuList />
    </ScrollView>
  );
};

export default profile;
