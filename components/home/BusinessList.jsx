import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { db } from "@/config/FirebaseConfig";
import { collection, getDocs, limit, query } from "firebase/firestore";
import BusinessCard from "./BusinessCard";

const BusinessList = () => {
  const [businessList, setbusinessList] = useState();
  useEffect(() => {
    getBusiness();
  }, []);
  const getBusiness = async () => {
    setbusinessList([]);
    const q = query(collection(db, "businessList"));
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      //   console.log(doc.data());
      setbusinessList((pre) => [...pre, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Popular Business
        </Text>
        <Text
          style={{
            color: Colors.primaryColor,
            fontFamily: "outfit-medium",
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessCard business={item} key={index} />
        )}
      />
    </View>
  );
};

export default BusinessList;
