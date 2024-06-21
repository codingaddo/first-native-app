import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import BusinessListCard from "../../components/businessList/BusinessListCard";
import { StatusBar } from "expo-status-bar";
import { getBackgroundColorAsync } from "expo-system-ui";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const [businessList, setbusinessList] = useState();
  const [loading, setLoading] = useState(false);
  const { category } = useLocalSearchParams(); //This takes the current param, it should match the filename
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  //Getting business list by category
  const getBusinessList = async () => {
    setbusinessList([]);
    setLoading(true);
    const q = query(
      collection(db, "businessList"),
      where("category", "==", category)
    );
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      //   console.log(doc.data());
      setbusinessList((pre) => [...pre, { id: doc?.id, ...doc.data() }]);
    });
    // console.log(businessList);
    setLoading(false);
  };
  return (
    <View>
      {/* <StatusBar style={{ getBackgroundColorAsync }}></StatusBar> */}
      {businessList?.length > 0 && loading === false ? (
        <FlatList
          onRefresh={getBusinessList}
          refreshing={loading}
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: "60%" }}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
            color: "gray",
            paddingTop: 50,
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;
