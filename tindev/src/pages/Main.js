import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';

import logo from "../assets/logo.png";

export default function Main() {
return (
  <SafeAreaView style={styles.container}> 
    <Image source={logo}></Image>
    <View style={styles.cardsContainer}>
    <View  style={styles.card}>
      <Image source={{ uri: 'https://avatars3.githubusercontent.com'}}></Image>
    <View style={styles.footer}></View>
    <View style={styles.name}>Warnner Sinotti</View>
    </View>
    </View>
    </SafeAreaView>

);
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-between"
  },
});
