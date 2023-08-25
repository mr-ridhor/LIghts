import React from "react";
import { View, Text, Image } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 8, alignItems: "center" }}>
      <View className="bg-white border shadow-[100%] h-56 w-40 flex items-center justify-center rounded-xl">
        <Image
          source={product.imageUrl}
          className="h-[85%] py-3 px-4 w-[80%]"
        />
      </View>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
    </View>
  );
};

export default ProductItem;
