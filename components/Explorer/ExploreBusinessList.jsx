import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const ExploreBusinessList = ({ businessList, loading }) => {
  const router = useRouter();

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={"large"} color={Colors.primaryColor} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={businessList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => router.push(`/businessDetail/${item.id}`)}
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Image
                source={{ uri: item.imageurl }}
                style={{
                  width: "100%",
                  height: 150,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
                  {item.name}
                </Text>
                <Text
                  style={{ fontFamily: "outfit-regular", color: Colors.Gray }}
                >
                  {item.address}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default ExploreBusinessList;
