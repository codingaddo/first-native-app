import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { getBackgroundColorAsync } from "expo-system-ui";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Category from "@/components/home/Category";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import ExploreBusinessList from "@/components/Explorer/ExploreBusinessList";

const explore = () => {
  const [businessList, setbusinessList] = useState();
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerTitle: category,
  //   });
  //   getBusinessCategory();
  // }, []);

  //Getting business list by category
  const getBusinessCategory = async (category) => {
    setbusinessList([]);
    setLoading(true);
    const q = query(
      collection(db, "businessList"),
      where("category", "==", category)
    );
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      // console.log(doc.data());
      setbusinessList((pre) => [...pre, { id: doc?.id, ...doc.data() }]);
    });
    console.log(businessList);
    setLoading(false);
  };
  return (
    <ScrollView style={{ padding: 20, paddingTop: 40 }}>
      <StatusBar style={{ getBackgroundColorAsync }}></StatusBar>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        Explore More
      </Text>
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
          borderWidth: 1,
          borderColor: Colors.primaryColor,
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

      <Category
        explore={true}
        onCategorySelect={(category) => getBusinessCategory(category)}
      />
      <ExploreBusinessList businessList={businessList} loading={loading} />
    </ScrollView>
  );
};

export default explore;
