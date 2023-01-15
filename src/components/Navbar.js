import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar(props) {
  const items = useSelector((state) => state.cart);
  // console.log("items", items);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textDecoration: "none",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items:{items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
