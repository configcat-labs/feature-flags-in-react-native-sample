import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { SignupButton } from "./components/SignupButton";
import { ConfigCatProvider } from 'configcat-react';

export default function App() {
  return (
    <ConfigCatProvider sdkKey="#YOUR_SDK_KEY#"
      options={{ pollIntervalSeconds: 10 }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <SignupButton buttonStyles={styles.button} />
        <StatusBar barStyle="default" />
      </View>
    </ConfigCatProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CBE72",
    borderRadius: 10,
    margin: 12,
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});