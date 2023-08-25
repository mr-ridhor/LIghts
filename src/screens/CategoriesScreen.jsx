import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { products } from "../data"; // Adjust the path accordingly
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

const ITEMS_PER_ROW = 2;
const ROWS_PER_PAGE = 2;
const ITEMS_PER_PAGE = ROWS_PER_PAGE * ITEMS_PER_ROW;
const CategoriesScreen = ({}) => {
  const route = useRoute(); // Use useRoute to access route params
  const { category } = route.params;
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  console.log("CategoryProductsScreen: category", category);
  console.log("CategoryProductsScreen: filteredProducts", filteredProducts);
  const renderProducts = (products) => {
    // const filteredProducts = selectedCategory
    //   ? products.filter((product) => product.category === selectedCategory)
    //   : products;
    const startIndex = (currentPage - 1) * (ITEMS_PER_ROW * ROWS_PER_PAGE);
    const visibleProducts = products.slice(
      startIndex,
      startIndex + ITEMS_PER_ROW * ROWS_PER_PAGE
    );

    const rows = [];
    for (let i = 0; i < visibleProducts.length; i += ITEMS_PER_ROW) {
      const rowProducts = visibleProducts.slice(i, i + ITEMS_PER_ROW);
      rows.push(rowProducts);
    }

    return (
      <View style={{ marginTop: 10 }}>
        {rows.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            {row.map((product) => (
              <View
                key={product.id}
                style={{
                  flex: 1,
                  paddingHorizontal: 8,
                  alignItems: "center",
                }}
              >
                <View
                  // style={{
                  //   backgroundColor: "white",
                  //   borderRadius: 10,
                  //   padding: 10,
                  //   alignItems: "center",
                  //   justifyContent: "center",
                  //   shadowColor: "#000",
                  //   shadowOffset: { width: 0, height: 2 },
                  //   shadowOpacity: 0.25,
                  //   shadowRadius: 3.84,
                  //   elevation: 5,
                  // }}
                  className="bg-white border shadow-[100%] h-56 w-40 flex items-center justify-center rounded-xl"
                >
                  <Image
                    source={product.imageUrl}
                    className="h-[85%] py-3 px-4 w-[80%]"
                    // style={{ width: 60, height: 60, marginBottom: 5 }}
                  />
                </View>
                <Text>{product.name}</Text>
                <Text>${product.price}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  return (
    <View className="pt-6 px-3 bg-white h-full">
      <Text>Products in {category}</Text>
      {renderProducts(filteredProducts)}
      <View
        style={{ flexDirection: "row", justifyContent: "center" }}
        className="mt-auto"
      >
        <Pressable
          className={`mr-4 ${currentPage === 1 ? "opacity-50" : ""}`}
          onPress={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Text className="text-gray-500 text-lg">Previous</Text>
        </Pressable>
        <Text className="text-lg">{currentPage}</Text>
        <Pressable
          className={`ml-4 ${currentPage >= totalPages ? "opacity-50" : ""}`}
          onPress={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <Text className="text-gray-500 text-lg">Next</Text>
        </Pressable>
      </View>
      {/* <FlatList
          data={filteredProducts}
          renderItem={({ item }) => (
            <View>
              <Image source={item.imageUrl} />
              <Text>
                {item.name} - ${item.price}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        /> */}
    </View>
  );
};

export default CategoriesScreen;
