import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/home/Header";
import Slider from "@/components/home/Slider";
import Category from "@/components/home/Category";
import BusinessList from "@/components/home/BusinessList";

const home = () => {
  return (
    <ScrollView>
      <Header />
      <Slider />
      <Category />
      <BusinessList />
      <View style={{ marginBottom: 20 }}></View>
    </ScrollView>
  );
};

export default home;
