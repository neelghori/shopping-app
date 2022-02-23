import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link href="/" passHref>
            <h1 style={{ color: "white", cursor: "pointer" }}>Dumazon</h1>
          </Link>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link href="/" passHref>
              <a className="active">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Product" passHref>
              Product
            </Link>
          </li>
          <li>
            <Link href="/addproduct">Add Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
