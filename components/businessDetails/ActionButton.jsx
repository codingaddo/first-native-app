import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import React from "react";

const ActionButton = ({ business }) => {
  const actionBtnMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/circle.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/internet.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
      url: business?.website,
    },
  ];

  const OpenUrl = (item) => {
    if (item.name === "Web") {
      return;
    }
    if (item.name === "Share") {
      Share.share({
        message:
          business?.name +
          "\nAddress:" +
          business?.address +
          "\nPhone:" +
          business?.contact,
      });
    }
    Linking.openURL(item?.url);
  };
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <FlatList
        // horizontal={true}
        numColumns={4}
        data={actionBtnMenu}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => OpenUrl(item)} key={index}>
            <Image source={item?.icon} style={{ width: 50, height: 50 }} />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActionButton;
