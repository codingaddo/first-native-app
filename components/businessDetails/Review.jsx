import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "@/constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

const Review = ({ business }) => {
  const [rating, setRating] = useState(3);
  const [input, setInput] = useState("");
  const onSubmit = async () => {
    const docRef = doc(db, "businessList", business.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: input,
      }),
    });

    setInput("");
    ToastAndroid.show("Comment submitted", ToastAndroid.LONG, ToastAndroid.TOP);
  };
  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>Review</Text>
      <View>
        <Rating
          imageSize={25}
          showRating={false}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          onChangeText={(val) => setInput(val)}
          numberOfLines={3}
          placeholder="Write your comment"
          value={input}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            textAlignVertical: "top",
          }}
        />
        <TouchableOpacity
          disabled={!input}
          onPress={() => onSubmit()}
          style={{
            padding: 10,
            backgroundColor: Colors.primaryColor,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "outfit-regular" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {business?.reviews?.map((item, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
              borderWidth: 2,
              borderColor: Colors.Gray,
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Image
              source={require("../../assets/images/leo.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 99,
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: "outfit-regular",
                  fontSize: 15,
                  color: Colors.Gray,
                }}
              >
                {item.comment}
              </Text>
              <Rating imageSize={20} readonly startingValue={item.rating} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Review;
