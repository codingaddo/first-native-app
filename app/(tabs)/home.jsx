import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/home/Header";
import Slider from "@/components/home/Slider";
import Category from "@/components/home/Category";
import BusinessList from "@/components/home/BusinessList";
import { StatusBar } from "expo-status-bar";
import { getBackgroundColorAsync } from "expo-system-ui";

const home = () => {
  return (
    <ScrollView>
      <StatusBar style={{ getBackgroundColorAsync }}></StatusBar>
      <Header />
      <Slider />
      <Category />
      <BusinessList />
      <View style={{ marginBottom: 20 }}></View>
    </ScrollView>
  );
};

export default home;
