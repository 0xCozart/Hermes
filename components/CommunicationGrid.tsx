import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";

// Configurable grid size (rows x columns)
const NUM_COLUMNS = 6;
const NUM_ROWS = 4;
const BUTTON_SIZE = Dimensions.get("window").width / NUM_COLUMNS - 8; // Auto-adjust button size

// Sample placeholder data
const words = Array.from({ length: NUM_COLUMNS * NUM_ROWS }, (_, i) => ({
  id: `${i + 1}`,
  text: `Word ${i + 1}`,
}));

export default function CommunicationGrid() {
  return (
    <View style={styles.container}>
      <FlatList
        data={words}
        numColumns={NUM_COLUMNS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button}>
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
    backgroundColor: "#4C9AFF", // Customize with your preferred color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Rounded buttons for a modern look
    elevation: 3, // Adds depth
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
