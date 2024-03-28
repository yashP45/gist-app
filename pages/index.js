import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { data } from "../data";
export default function App() {
  console.log(data.image_url)
  return (
    <View style={styles.container}>
     <Card imageSource={data.image_url} desc={data.summary} title={data.title}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  text: {
    fontSize: 16,
  },
});
