import React from "react";
import { View, Text, Image, Pressable } from "react-native";
// import styles from "./styles"; // Import the styles if necessary

const CategoryCard = ({ category, selected, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View s>
        <Image source={category.img} className="h-10 w-14" />
      </View>
      <Text>{category.name}</Text>
    </Pressable>
  );
};

export default CategoryCard;
