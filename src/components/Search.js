import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View className="flex-row  items-center p-3 rounded-full border border-gray-300">
      <Ionicons name="search" size={20} className="text-gray-300" />
      <TextInput
        placeholder="search your desired products"
        className="ml-2 flex-1 text-xl"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
