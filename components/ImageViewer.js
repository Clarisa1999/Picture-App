import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeHolderImageSource }) {
  return <Image source={placeHolderImageSource} Style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
