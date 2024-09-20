import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VendorPage.css";

const VendorPage = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  // Dummy data for demonstration
  const profile = {
    name: "Mr. Ashok",
    email: "designstudios@example.com",
    phone: "8888888888",
    storeName: "Design Studios",
  };

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const [products, setProducts] = useState([]);
  const [orders] = useState([
    { id: 1, product: "Mug", customer: "Sheeba", status: "Pending" },
    { id: 2, product: "Keychain", customer: "Aashi", status: "Shipped" },
  ]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", description: "", price: "", stock: "" });
  };

  return (
    <div className="vendor-page">
      <h1 className="vendor-title">Vendor Dashboard</h1>
      <div className="vendor-tabs">
        <button
          className={`vendor-tab ${selectedTab === "profile" ? "active" : ""}`}
          onClick={() => handleTabClick("profile")}
        >
          View Profile
        </button>
        <button
          className={`vendor-tab ${
            selectedTab === "addProducts" ? "active" : ""
          }`}
          onClick={() => handleTabClick("addProducts")}
        >
          Add Products
        </button>
        <button
          className={`vendor-tab ${
            selectedTab === "viewOrders" ? "active" : ""
          }`}
          onClick={() => handleTabClick("viewOrders")}
        >
          View Orders
        </button>
        <Link to="/" className="navbar-logout">
          LOGOUT
        </Link>
      </div>

      <div className="vendor-content">
        {selectedTab === "profile" && (
          <div className="profile-section">
            <h2>Profile</h2>
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p>
              <strong>Store Name:</strong> {profile.storeName}
            </p>
          </div>
        )}

        {selectedTab === "addProducts" && (
          <div className="add-product-section">
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <label className="product-label">Product Name:</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleProductChange}
                required
                className="product-input"
              />

              <label className="product-label">Description:</label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleProductChange}
                required
                className="product-textarea"
              />

              <label className="product-label">Price:</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleProductChange}
                required
                className="product-input"
              />

              <label className="product-label">Stock:</label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleProductChange}
                required
                className="product-input"
              />

              <button type="submit" className="add-product-button">
                Add Product
              </button>
            </form>

            <h3>Products List</h3>
            <ul className="products-list">
              {products.map((product, index) => (
                <li key={index}>
                  <strong>{product.name}</strong> - {product.description} - $
                  {product.price} - Stock: {product.stock}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedTab === "viewOrders" && (
          <div className="orders-section">
            <h2>Orders</h2>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.customer}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorPage;
