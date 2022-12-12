import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LOGO from "./assets/logo_project.png";

const LOGO_SRC = Image.resolveAssetSource(LOGO).uri;

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Smart Stove ssssss </Text>
      <Image source={{ uri: LOGO_SRC }} style={{ width: 400, height: 400 }} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
