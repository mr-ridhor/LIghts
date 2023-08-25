// src/context/AppContext.js

import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
const AppContext = createContext();
// import { useFocusEffect } from '@react-navigation/native';
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from local storage when the app starts
    loadUserFromLocalStorage();
  }, []);

  const loadUserFromLocalStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error loading user data from local storage:", error);
    }
  };

  const login = (userData) => {
    setUser(userData);
    saveUserToLocalStorage(userData); // Save user data to local storage
  };

  const logout = () => {
    setUser(null);
    clearUserFromLocalStorage(); // Clear user data from local storage
  };

  const saveUserToLocalStorage = async (userData) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving user data to local storage:", error);
    }
  };

  const clearUserFromLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem("userData");
    } catch (error) {
      console.error("Error clearing user data from local storage:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
