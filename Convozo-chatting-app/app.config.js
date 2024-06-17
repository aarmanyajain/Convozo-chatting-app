import 'dotenv/config';

export default {
  expo: {
    name: "react-native-chat",
    slug: "react-native-chat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/convozo.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/convozo.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyARSiXs_2WlxoRvz-sOmcGDQrIbaSnoPJ8",
      authDomain: "chatapp-40ef3.firebaseapp.com",
      projectId: "chatapp-40ef3",
      storageBucket: "chatapp-40ef3.appspot.com",
      messagingSenderId: "838438002994",
      appId: "1:838438002994:web:61b212bcfc19299ad7f72b",
    },
  },
};
