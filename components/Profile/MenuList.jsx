import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const MenuList = () => {
  const list = [
    {
      id: 1,
      name: "Add Business",
      icon: require("../../assets/images/plus.png"),
      path: "/addBusiness/add-business",
    },
    {
      id: 2,
      name: "My Business",
      icon: require("../../assets/images/plus.png"),
      path: "",
    },
    {
      id: 3,
      name: "Share App",
      icon: require("../../assets/images/share.png"),
      path: "",
    },
    {
      id: 4,
      name: "Logout",
      icon: require("../../assets/images/logout.png"),
      path: "",
    },
  ];
  const router = useRouter();
  const onMenuClick = (item) => {
    router.push(item.path);
  };
  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        numColumns={2}
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onMenuClick(item)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              flex: 1,
              padding: 10,
              borderWidth: 1,
              borderRadius: 15,
              margin: 10,
              backgroundColor: "white",
              borderColor: Colors.primaryColor,
            }}
          >
            <Image source={item.icon} style={{ width: 35, height: 35 }} />
            <Text
              style={{ fontFamily: "outfit-medium", fontSize: 15, flex: 1 }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MenuList;
