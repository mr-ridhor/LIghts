import { StyleSheet, View, Text } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../context/AppContext";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  const { login } = useContext(AppContext);

  const handleLogin = (userData) => {
    // Call the login function from the context to handle authentication.
    login(userData);
    // navigation.navigate('Home'); // Replace 'Home' with the actual name of your home screen.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My E-Commerce App</Text>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  }2
});
