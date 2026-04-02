const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const products = [
  {
    name: "Fresh Broccoli",
    price: 4.99,
    image:
      "https://www.dudafresh.com/hubfs/images-2017/p-main-broccoli.png",
    category: "Vegetables",
    featured: true,
    topSelling: true,
  },
  {
    name: "Red Apples",
    price: 6.99,
    image:
      "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
    category: "Fruits",
    featured: true,
  },
  {
    name: "Milk",
    price: 3.49,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3L6l80kovZTUPthhb_wrvsum3eyRsWay1ng&s",
    category: "Dairy",
    topSelling: true,
    featured: true,
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Data seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
