import React, { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import ProductForm from "../component/ProductForm";
import BeatLoader from "react-spinners/BeatLoader";

import Router from "next/router";
const Product = () => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  return (
    <div className="text-center">
      <Navbar />
      {loading ? (
        <BeatLoader size={20} color={"#000"} loading={loading} />
      ) : (
        <ProductForm />
      )}
    </div>
  );
};

export default Product;
