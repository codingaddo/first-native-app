import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import Intro from "../../components/businessDetails/Intro";
import ActionButton from "../../components/businessDetails/ActionButton";
import About from "../../components/businessDetails/About";
import Review from "../../components/businessDetails/Review";
import { StatusBar } from "expo-status-bar";
import { getBackgroundColorAsync } from "expo-system-ui";

const BusinessDetai = () => {
  const { businessId } = useLocalSearchParams();
  const [business, setBusiness] = React.useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getBusinessDetailById();
  }, []);
  const getBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, "businessList", businessId);
    const document = await getDoc(docRef);
    if (document.exists()) {
      //   console.log(document.data());
      setBusiness({ id: document.id, ...document.data() });
      setLoading(false);
    } else {
      console.log("No doc found");
    }
  };
  return (
    <ScrollView style={{ flexGrow: 1 }}>
      {/* <StatusBar style={{ getBackgroundColorAsync }}></StatusBar> */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: "60%" }}
        />
      ) : (
        <View>
          <Intro business={business} />
          <ActionButton business={business} />
          <About business={business} />
          <Review business={business} />
        </View>
      )}
    </ScrollView>
  );
};

export default BusinessDetai;
