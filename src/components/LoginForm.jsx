// src/components/LoginForm.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // import { useNavigation } from "@react-navigation/native";
  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage("Please fill in both username and password.");
      return;
    }
    const userData = {
      username,
      password,
    };
    onLogin(userData);
  };

  return (
    <View style={styles.container} className="flex gap-4 flex-col w-full">
      <View className="flex flex-row border  border-gray-500 p-4 rounded-md  items-center justify-between">
        <Icon name="user" size={20} color="#000" />

        <TextInput
          className="flex-1 pl-3 h-full text-xl"
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          // style={styles.input}
        />
      </View>

      <View className="border border-gray-500 p-4 rounded-md flex flex-row justify-between items-center">
        <TextInput
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          placeholder="Enter your password"
          className="h-full text-xl flex-1"
        />

        <TouchableOpacity onPress={togglePasswordVisibility}>
          {showPassword ? (
            <Icon name="eye-slash" size={20} color="#000" />
          ) : (
            <Icon name="eye" size={20} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      {errorMessage !== "" && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <View className="py-4   rounded-md flex flex-row justify-between items-center ">
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.8}
          className="w-fu py-4 bg-yellow-400 ease-linear flex-1 rounded-md flex items-center justify-center "
        >
          <Text className="font-bold text-xl ">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: "red",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginForm;
