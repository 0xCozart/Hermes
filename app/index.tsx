import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
// src/screens/HomeScreen.tsx
import { useNavigation } from "expo-router";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Hermes AAC</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SymbolsScreen")}
      >
        <Text style={styles.buttonText}>Explore Symbols</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
