import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

const Slider = () => {
  const [sliderList, setSliderList] = useState();

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    setSliderList([]);
    const q = query(collection(db, "sliders"));
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      // console.log(doc.data());
      setSliderList((pre) => [...pre, doc.data()]);
    });
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 20,
        }}
      >
        #Special for you
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        data={sliderList}
        renderItem={({ item, index }) => (
          <Image
            source={(source = require("../../assets/images/leo.jpg"))}
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;
