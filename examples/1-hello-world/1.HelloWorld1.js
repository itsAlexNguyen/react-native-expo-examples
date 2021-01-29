import React from "react";
import { View, Text } from "react-native";

export default function HelloWorld1() {
  return (
    // https://reactnative.dev/docs/view
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      {/* https://reactnative.dev/docs/text */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        HELLO WORLD!
      </Text>
    </View>
  );
}
