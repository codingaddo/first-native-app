import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CategoryCard = ({ category, onCategoryPress }) => {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View
        style={{
          padding: 15,
          borderRadius: 10,
          backgroundColor: "#d3bff9",
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 12,
          textAlign: "center",
          marginTop: 5,
          marginRight: 15,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
