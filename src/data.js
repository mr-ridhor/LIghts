import Images from "./utils/Images";
// Mock data for products
const products = [
  {
    id: 1,
    name: "Product 1",
    imageUrl: require("../assets/Images/electronics.jpg"),
    price: 19.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Product 2",
    imageUrl: require("../assets/Images/dress.jpg"),
    price: 29.99,
    category: "Clothing",
  },
  {
    id: 3,
    name: "Product 3",
    imageUrl: require("../assets/Images/furnitures.jpg"),
    price: 39.99,
    category: "Funitures",
  },
  {
    id: 4,
    name: "Product 4",
    imageUrl: require("../assets/Images/beauty.jpg"),
    price: 49.99,
    category: "Beauty",
  },
  {
    id: 5,
    name: "Product 5",
    imageUrl: require("../assets/Images/jewelry.jpg"),
    price: 59.99,
    category: "Jewelry",
  },
  {
    id: 6,
    name: "Product 6",
    imageUrl: require("../assets/Images/phone.jpg"),
    price: 69.99,
    category: "Phones",
  },
  {
    id: 7,
    name: "Product 7",
    imageUrl: require("../assets/Images/dress.jpg"),
    price: 79.99,
    category: "Clothing",
  },
  {
    id: 8,
    name: "Product 8",
    imageUrl: require("../assets/Images/shoe.jpg"),
    price: 89.99,
    category: "Shoes",
  },
  {
    id: 9,
    name: "Product 9",
    imageUrl: require("../assets/Images/beauty.jpg"),
    price: 99.99,
    category: "Beauty",
  },
  {
    id: 10,
    name: "Product 10",
    imageUrl: require("../assets/Images/perf.jpg"),
    price: 109.99,
    category: "Perfumes",
  },

  {
    id: 11,
    name: "Product 11",
    imageUrl: require("../assets/Images/electronics.jpg"),
    price: 119.99,
    category: "Electronics",
  },
  {
    id: 12,
    name: "Product 12",
    imageUrl: require("../assets/Images/dress.jpg"),
    price: 129.99,
    category: "Clothing",
  },
  {
    id: 13,
    name: "Product 13",
    imageUrl: require("../assets/Images/furnitures.jpg"),
    price: 139.99,
    category: "Funitures",
  },
  {
    id: 14,
    name: "Product 14",
    imageUrl: require("../assets/Images/beauty.jpg"),
    price: 149.99,
    category: "Beauty",
  },
  {
    id: 15,
    name: "Product 15",
    imageUrl: require("../assets/Images/electronics.jpg"),
    price: 159.99,
    category: "Electronics",
  },
  {
    id: 16,
    name: "Product 16",
    imageUrl: require("../assets/Images/phone.jpg"),
    price: 169.99,
    category: "Phones",
  },
  {
    id: 17,
    name: "Product 17",
    imageUrl: require("../assets/Images/perf.jpg"),
    price: 179.99,
    category: "Perfumes",
  },
  {
    id: 18,
    name: "Product 18",
    imageUrl: require("../assets/Images/phone.jpg"),
    price: 189.99,
    category: "Perfumes",
  },
  {
    id: 19,
    name: "Product 19",
    imageUrl: require("../assets/Images/phone.jpg"),
    price: 199.99,
    category: "Phone",
  },
  {
    id: 20,
    name: "Product 20",
    imageUrl: require("../assets/Images/shoe.jpg"),
    price: 209.99,
    category: "Shoes",
  },

  {
    id: 21,
    name: "Product 21",
    imageUrl: require("../assets/Images/shoe.jpg"),
    price: 219.99,
    category: "Shoes",
  },
  {
    id: 22,
    name: "Product 22",
    imageUrl: require("../assets/Images/perf.jpg"),
    price: 229.99,
    category: "Perfumes",
  },
  {
    id: 23,
    name: "Product 23",
    imageUrl: require("../assets/Images/furnitures.jpg"),
    price: 239.99,
    category: "Funitures",
  },
  {
    id: 24,
    name: "Product 24",
    imageUrl: require("../assets/Images/jewelry.jpg"),
    price: 249.99,
    category: "Jewelry",
  },
  {
    id: 25,
    name: "Product 25",
    imageUrl: require("../assets/Images/jewelry.jpg"),
    price: 259.99,
    category: "Jewelry",
  },
  {
    id: 26,
    name: "Product 26",
    imageUrl: require("../assets/Images/jewelry.jpg"),
    price: 269.99,
    category: "Jewelry",
  },
  {
    id: 27,
    name: "Product 27",
    imageUrl: require("../assets/Images/shoe.jpg"),
    price: 279.99,
    category: "Shoes",
  },
  {
    id: 28,
    name: "Product 28",
    imageUrl: require("../assets/Images/electronics.jpg"),
    price: 289.99,
    category: "Electronics",
  },
  {
    id: 29,
    name: "Product 29",
    imageUrl: require("../assets/Images/bed.jpg"),
    price: 299.99,
    category: "Funitures",
  },
  {
    id: 30,
    name: "Product 30",
    imageUrl: require("../assets/Images/perf.jpg"),
    price: 309.99,
    category: "Perfumes",
  },
];

const categories = [
  { name: "Clothing", img: Images.clothe },
  { name: "Phones", img: Images.phone },
  { name: "Jewelry", img: Images.jel },
  { name: "Perfumes", img: Images.perf },
  { name: "Funitures", img: Images.fur },
  { name: "Electronics", img: Images.elect },
  { name: "Beauty", img: Images.beauty },
  { name: "Shoes", img: Images.shoe },
];

export { products, categories };