import express from "express";

const router = express.Router();

// Sample placeholder data for Gadget Bhai
const sampleProducts = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    price: 4500,
    category: "Audio",
    inStock: true,
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 3200,
    category: "Wearables",
    inStock: true,
  },
];

// GET: Fetch products
router.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: sampleProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

// POST: Add a new product
router.post("/", (req, res) => {
  try {
    const body = req.body;
    const newProduct = {
      id: sampleProducts.length + 1,
      ...body,
    };
    sampleProducts.push(newProduct);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
});

export default router;
