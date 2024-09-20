import React from "react";
import { Link } from "react-router-dom";
import "./AdminPage.css";
import Footer from "./Footer";

function AdminPage() {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <img
          src="/images/logo.png"
          alt="Crafted Imprints Logo"
          className="navbar-logo-img"
        />
        <h2 className="admin-logo">Crafted Imprints</h2>
        <nav className="admin-nav">
          <ul>
            <li>
              <Link to="/home">Dashboard</Link>
            </li>
            <li>
              <Link to="/home">Manage Users</Link>
            </li>
            <li>
              <Link to="/home">Manage Vendors</Link>
            </li>
            <li>
              <Link to="/home">Manage Products</Link>
            </li>
            <li>
              <Link to="/home">Manage Orders</Link>
            </li>
            <li>
              <Link to="/home">Settings</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
        </header>

        <section id="manage-users" className="admin-section">
          <h2>Manage Users</h2>
          <p>View and manage all registered users.</p>
        </section>

        <section id="manage-products" className="admin-section">
          <h2>Manage Products</h2>
          <p>View and manage products available on the platform.</p>
        </section>

        <section id="manage-orders" className="admin-section">
          <h2>Manage Orders</h2>
          <p>Review and manage customer orders.</p>
        </section>

        <section id="settings" className="admin-section">
          <h2>Settings</h2>
          <p>Configure application settings.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
