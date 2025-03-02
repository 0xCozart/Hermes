import * as Speech from "expo-speech";

import { FlatList, Image, Text, TouchableOpacity } from "react-native";

const words = [
  { id: "1", text: "Hello", image: require("@/assets/images/hello.png") },
  { id: "2", text: "Yes", image: require("@/assets/images/yes.png") },
  { id: "3", text: "No", image: require("@/assets/images/no.png") },
  {
    id: "4",
    text: "Thank you",
    image: require("@/assets/images/thank_you.png"),
  },
];

export default function CommunicationGrid() {
  const speak = (word: string) => {
    Speech.speak(word, { rate: 0.9, pitch: 1.0 });
  };

  return (
    <FlatList
      data={words}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => speak(item.text)}
          style={{
            flex: 1,
            margin: 10,
            padding: 20,
            backgroundColor: "lightblue",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={item.image}
            style={{ width: 50, height: 50, marginBottom: 10 }}
          />
          <Text style={{ fontSize: 20 }}>{item.text}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
