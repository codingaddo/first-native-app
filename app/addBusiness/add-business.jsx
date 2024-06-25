import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { getStorage, ref } from "firebase/storage";

import { Colors } from "@/constants/Colors";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

const AddBusiness = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [about, setabout] = useState("");
  const [category, setCategoty] = useState("shopping");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Business",
      headerShown: true,
    });

    getCategoryList();
  }, []);

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImage(result?.assets[0]?.uri);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  const getCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "categories"));
    const snapShot = await getDocs(q);
    await snapShot.forEach((doc) => {
      //   console.log(doc.data());
      //   setCategoryList((pre) => [...pre, doc.data()]);
      setCategoryList((pre) => [
        ...pre,
        {
          label: doc.data().name,
          value: doc.data().name,
          key: Date.now(),
        },
      ]);
    });
  };

  const onsubmit = async () => {
    setLoading(true);
    await setDoc(doc(db, "businessList", Date.now().toString()), {
      name: name,
      category: category,
      address: address,
      contact: contact,
      email: email,
      about: about,
      // image: image,
    });
    setLoading(false);
    ToastAndroid.show("New business added successfully", ToastAndroid.LONG);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
        Add new business
      </Text>
      <Text style={{ fontFamily: "outfit-regular", fontSize: 16 }}>
        Fill business details
      </Text>
      <TouchableOpacity
        onPress={() => onImagePick()}
        style={{
          marginTop: 20,
          backgroundColor: "#d0d4d8",
          borderRadius: 15,
          padding: 10,
          width: 120,
          alignItems: "center",
        }}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 90,
            }}
          />
        ) : (
          <Image
            source={require("../../assets/images/camera.png")}
            style={{
              width: 90,
              height: 90,
            }}
          />
        )}
      </TouchableOpacity>

      <View>
        <TextInput
          onChangeText={(value) => setName(value)}
          placeholder="Name"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            fontSize: 17,
            marginTop: 10,
            backgroundColor: "white",
            borderColor: Colors.primaryColor,
            fontFamily: "outfit-regular",
          }}
        />
        <TextInput
          onChangeText={(value) => setaddress(value)}
          placeholder="Address"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            fontSize: 17,
            marginTop: 10,
            backgroundColor: "white",
            borderColor: Colors.primaryColor,
            fontFamily: "outfit-regular",
          }}
        />
        <TextInput
          onChangeText={(value) => setcontact(value)}
          placeholder="Contact"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            fontSize: 17,
            marginTop: 10,
            backgroundColor: "white",
            borderColor: Colors.primaryColor,
            fontFamily: "outfit-regular",
          }}
        />
        <TextInput
          onChangeText={(value) => setemail(value)}
          placeholder="Email"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            fontSize: 17,
            marginTop: 10,
            backgroundColor: "white",
            borderColor: Colors.primaryColor,
            fontFamily: "outfit-regular",
          }}
        />
        <TextInput
          onChangeText={(value) => setabout(value)}
          multiline
          numberOfLines={5}
          placeholder="About"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            fontSize: 17,
            marginTop: 10,
            backgroundColor: "white",
            borderColor: Colors.primaryColor,
            fontFamily: "outfit-regular",
            height: 100,
            textAlignVertical: "top",
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 17,
          marginTop: 10,
          backgroundColor: "white",
          borderColor: Colors.primaryColor,
          fontFamily: "outfit-regular",
          textTransform: "capitalize",
        }}
      >
        {/* <RNPickerSelect
          onValueChange={(value) => setCategoryList(value)}
          items={categoryList}
          itemKey={categoryList.key}
        /> */}
      </View>
      <TouchableOpacity
        onPress={() => onsubmit()}
        disabled={loading}
        style={{
          padding: 15,
          backgroundColor: Colors.primaryColor,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        {!loading ? (
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 15,
              color: "white",
            }}
          >
            Add new Business
          </Text>
        ) : (
          <Text>Adding business...</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddBusiness;
