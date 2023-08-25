import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import StackNavigator from "./src/navigators/StackNavigator";
import { AppProvider } from "./src/context/AppContext";
import AppNavigator from "./src/navigators/AppNavigators";
export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
