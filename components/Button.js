import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {
  if (theme === "primary") {
    return (
      <View
        sytle={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          sytle={[
            styles.button,
            { borderWidth: 4, borderColor: "#FFC0CB", borderRadius: 18 },
          ]}
          onPress={() => alert("You pressed a button.")}
        >
          <FontAwesome name="picture-o" size={18} style={styles.buttonIcon} />
          <Text sytle={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "#FFC0CB",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "blue",
    fontSize: 20,
  },
});
