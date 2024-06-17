import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

export default function AppOnboarding() {
  const navigation = useNavigation();

  const handleDone = () => {
navigation.navigate("Home", { screen: "Chats" });
  };

  const DoneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/1...png")} />,
            title: "Chatting made Easy",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/2...png")} />,
            title: "Firebase Authentication",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/3...png")} />,
            title: "Start",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  doneButton: {
    padding: 20, // Adjust padding as needed
  },
});
