import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home";
import Gallery from "./Gallery";
import ProductPage from "./ProductPage";
import AdminPage from "./AdminPage";
import LandingPage from "./LandingPage";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
import Cart from "./Cart";
import VendorPage from "./VendorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/vendor" element={<VendorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
