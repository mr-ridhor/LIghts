import React from "react";
import { View, Text, Pressable } from "react-native";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <Pressable
        style={{ marginRight: 4, opacity: currentPage === 1 ? 0.5 : 1 }}
        onPress={onPrevPage}
        disabled={currentPage === 1}
      >
        <Text
          style={{ color: currentPage === 1 ? "#888" : "#333", fontSize: 16 }}
        >
          Previous
        </Text>
      </Pressable>
      <Text style={{ fontSize: 16 }}>{currentPage}</Text>
      <Pressable
        style={{ marginLeft: 4, opacity: currentPage >= totalPages ? 0.5 : 1 }}
        onPress={onNextPage}
        disabled={currentPage >= totalPages}
      >
        <Text
          style={{
            color: currentPage >= totalPages ? "#888" : "#333",
            fontSize: 16,
          }}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default Pagination;
