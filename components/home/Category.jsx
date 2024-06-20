import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import CategoryCard from "./CategoryCard";
import { useRouter } from "expo-router";

const Category = () => {
  const [categoryList, setCategoryList] = useState();
  const router = useRouter();
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    setCategoryList([]);
    const q = query(collection(db, "categories"));
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      //   console.log(doc.data());
      setCategoryList((pre) => [...pre, doc.data()]);
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
          Category
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
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoryCard
            category={item}
            key={index}
            onCategoryPress={
              (category) => router.push("/businessList/" + item.name) //Dynamic routing
            }
          />
        )}
      />
    </View>
  );
};

export default Category;
