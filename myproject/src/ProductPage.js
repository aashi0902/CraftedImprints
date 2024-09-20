import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./ProductPage.css";

const products = {
  Keychains: [
    { id: 1, name: "Name Keychain", image: "/images/k1.webp", price: "₹199" },
    { id: 2, name: "Photo Keychain", image: "/images/k3.avif", price: "₹299" },
  ],
  Mugs: [
    { id: 3, name: "Ceramic Mug", image: "/images/m1.webp", price: "₹299" },
    { id: 4, name: "Travel Mug", image: "/images/m2.webp", price: "₹399" },
  ],
  Coasters: [
    {
      id: 5,
      name: "Wooden Coaster",
      image: "/images/c1.webp",
      price: "₹299",
    },
    { id: 6, name: "Quote Coaster", image: "/images/c2.jfif", price: "₹399" },
  ],

  Calenders: [
    {
      id: 7,
      name: "Photo Calendar",
      image: "/images/cl1.jfif",
      price: "₹199",
    },
  ],
  Bags: [
    {
      id: 8,
      name: "Design Bag",
      image: "/images/t1.avif",
      price: "₹399",
    },
    { id: 9, name: "Quote Bag", image: "/images/t3.jfif", price: "₹499" },
  ],
  Notebooks: [
    {
      id: 10,
      name: "Name Notebook",
      image: "/images/n1.jpg",
      price: "₹199",
    },
    {
      id: 11,
      name: "Quote Notebook",
      image: "/images/n3.jpg",
      price: "₹299",
    },
    {
      id: 12,
      name: "Design Notebook",
      image: "/images/n4.jpg",
      price: "₹399",
    },
  ],
  Magnets: [
    { id: 13, name: "Fridge Magnet", image: "/images/mg1.jpeg", price: "₹299" },
    { id: 14, name: "Qoute Magnet", image: "/images/mg4.jpg", price: "₹399" },
  ],
};

const ProductPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedColor("");
    setQuantity(1);
  };

  return (
    <div className="product-page">
      <NavBar />
      <h1 className="page-title">PRODUCTS WE CUSTOMIZE </h1>
      <hr />
      <br />
      <div className="product-container">
        <div className="accordion">
          {Object.keys(products).map((category) => (
            <div key={category} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
              {expandedCategory === category && (
                <div className="accordion-content">
                  {products[category].map((product) => (
                    <div
                      key={product.id}
                      className="product-item"
                      onClick={() => handleProductClick(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="product-name">{product.name}</div>
                      <div className="product-price">{product.price}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="product-details">
          {selectedProduct ? (
            <>
              <h2>{selectedProduct.name}</h2>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="product-detail-image"
              />
              <p>
                Description: A beautifully customized {selectedProduct.name}
              </p>
              <p>Price: {selectedProduct.price}</p>
              <p>Stock Availability: In Stock</p>

              <label className="product-label">
                Choose Color :
                <select
                  className="product-select"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">Select Color</option>
                  <option value="Red">Black</option>
                  <option value="Red">White</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Yellow">Purple</option>
                </select>
              </label>

              <label className="product-label">
                Select Quantity :
                <input
                  type="number"
                  className="quantity-input"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </label>

              <>Upload Design File : </>
              <input type="file" className="upload-design-file" />
              <br />
              <button className="add-to-cart-button">Add to Cart</button>
            </>
          ) : (
            <p>Please select a product to see the details</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
