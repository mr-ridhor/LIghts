import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductItem from "../components/ProductCard";
import { products, categories } from "../data.js";
import { useNavigation } from "@react-navigation/native";
import Pagination from "../components/Pagination";
import CategoryCard from "./CartegoryCard";
import SearchBar from "../components/Search";
import { AppContext } from "../context/AppContext";

const ITEMS_PER_ROW = 2;
const ROWS_PER_PAGE = 2;
const ITEMS_PER_PAGE = ROWS_PER_PAGE * ITEMS_PER_ROW;

const HomeScreen = () => {
  const { logout } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState("");

  const handleCategoryPress = (category) => {
    navigation.navigate("Category", { category: category.name });
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setMinPrice(null);
    setMaxPrice(null);
    setCurrentPage(1);
  };
  const handleLogout = () => {
    logout();
  };
  const renderProducts = () => {
    const filteredProducts = products.filter((product) => {
      const meetsCategoryFilter =
        !selectedCategory || product.category === selectedCategory;
      const meetsSearchInput =
        !searchInput ||
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.category.toLowerCase().includes(searchInput.toLowerCase());

      const meetsMinPrice = minPrice === null || product.price >= minPrice;
      const meetsMaxPrice = maxPrice === null || product.price <= maxPrice;

      return (
        meetsCategoryFilter &&
        meetsSearchInput &&
        meetsMinPrice &&
        meetsMaxPrice
      );
    });

    const startIndex = (currentPage - 1) * (ITEMS_PER_ROW * ROWS_PER_PAGE);
    const visibleProducts = filteredProducts.slice(
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
              <ProductItem key={product.id} product={product} />
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 40, backgroundColor: "#FFF" }}
      className=" opacity-100"
    >
      <View className="flex w-full px-4 items-end pt-4">
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-amber-400 w-fit p-1 px-2"
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-6 mx-3 flex flex-col h-[90%]">
        <SearchBar value={searchInput} onChangeText={setSearchInput} />
        <View className="pt-1 gap-1">
          <Text className="text-xl">Categories</Text>
          <ScrollView
            horizontal
            style={{ marginTop: 5, flexDirection: "row" }}
            contentContainerStyle={{ paddingRight: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              {categories.map((category) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  selected={selectedCategory === category.name}
                  onPress={() => handleCategoryPress(category)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={clearFilters}
          style={{
            alignItems: "center",
            marginVertical: 1,
          }}
        >
          <Text style={{ color: "#007BFF" }}>Clear Filters</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            placeholder="Min Price"
            value={minPrice !== null ? minPrice.toString() : ""}
            onChangeText={(value) =>
              setMinPrice(value !== "" ? parseFloat(value) : null)
            }
            keyboardType="numeric"
            style={{
              flex: 1,
              marginRight: 8,
            }}
          />
          <TextInput
            className="outline-none"
            placeholder="Max Price"
            value={maxPrice !== null ? maxPrice.toString() : ""}
            onChangeText={(value) =>
              setMaxPrice(value !== "" ? parseFloat(value) : null)
            }
            keyboardType="numeric"
            style={{
              flex: 1,
            }}
          />
        </View>
        <KeyboardAvoidingView>
          {renderProducts()}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={() => setCurrentPage(currentPage + 1)}
            onPrevPage={() => setCurrentPage(currentPage - 1)}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#FFF",
  },
  container: {
    marginTop: 10,
    marginHorizontal: 20,
    flex: 1,
  },
  categoryFilterContainer: {
    // ... (category filter styles)
  },
  contentContainer: {
    flex: 1,
  },
  logoutButton: {
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FF0000", // Example color
    borderRadius: 10,
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
export default HomeScreen;
