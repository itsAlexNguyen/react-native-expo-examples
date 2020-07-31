import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  Text,
  ViewStyle,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Stories from "./Stories";
import Article from "./Article";

import data from "./data";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Instagram() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="camera" size={24} />
        </TouchableOpacity>

        <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />

        <TouchableOpacity>
          <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>

      {/* https://reactnative.dev/docs/flatlist */}
      <FlatList
        data={data.articles}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <>
                <View style={styles.stories}>
                  <Stories stories={data.stories} profile={data.profile} />
                </View>

                <Article item={item} />
              </>
            );
          } else {
            return <Article item={item} />;
          }
        }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const BORDER_BOTTOM: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#dbdbdb",
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
    ...BORDER_BOTTOM,
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: "contain",
  },
  stories: {
    height: 104,
    padding: 10,
    backgroundColor: "#fafafa",
    ...BORDER_BOTTOM,
  },
});
