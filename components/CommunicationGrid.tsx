import * as Speech from "expo-speech";

import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";

// Configurable grid size
const NUM_COLUMNS = 6;
const NUM_ROWS = 4;
const BUTTON_SIZE = Dimensions.get("window").width / NUM_COLUMNS - 8;

// Sample words with images (replace with real assets)
const words = [
  { id: "1", text: "Hello", image: require("@/assets/images/hello.png") },
  { id: "2", text: "Yes", image: require("@/assets/images/yes.png") },
  { id: "3", text: "No", image: require("@/assets/images/no.png") },
  {
    id: "4",
    text: "Thank you",
    image: require("@/assets/images/thank_you.png"),
  },
  { id: "5", text: "Eat", image: require("@/assets/images/eat.png") },
  { id: "6", text: "Drink", image: require("@/assets/images/drink.png") },
  // Add more words here...
];

export default function CommunicationGrid() {
  const speak = (word: string) => {
    Speech.speak(word, { rate: 0.9, pitch: 1.0 });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={words}
        numColumns={NUM_COLUMNS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => speak(item.text)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    margin: 2,
    backgroundColor: "#4C9AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
