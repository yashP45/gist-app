import { StyleSheet, Text, View, Image , Dimensions } from "react-native";
import React from "react";
import { smallScreen , bigScreens } from "../styles";
const Card = ({ imageSource, desc  , title}) => {
    const windowWidth = Dimensions.get('window').width;
    console.log(windowWidth)
   const  styles = StyleSheet.create(smallScreen);
    // const styles= null;
    // if(windowWidth > 780) {
    //      styles = StyleSheet.create(bigScreens);
    // } else {
    //     styles = StyleSheet.create(smallScreen);   
    // }
  return (
    <View style={styles.container}>
        <View>
      <Image
        style={styles.image}
        source={{
          uri: imageSource,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.summary}>{desc}</Text>
      </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Summarized News Story By</Text>
        <Text style={styles.app}>The Gist - AI news App</Text>
      </View>
    </View>
  );
};

export default Card;




