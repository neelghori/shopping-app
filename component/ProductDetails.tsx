import React, { useState } from "react";
import Image from "next/image";
import EditDeleteButton from "./EditDeleteButton";
import BeatLoader from "react-spinners/BeatLoader";
import { Apiprops } from "./helper/type";
import Router from "next/router";

const ProductDetails = (props: { productDetails: Apiprops }) => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  return (
    <div>
      {loading ? (
        <BeatLoader size={20} color={"#000"} loading={loading} />
      ) : (
        <div className="wrapper">
          <EditDeleteButton productId={props.productDetails.id} />
          <div className="product-img">
            <Image
              src={props.productDetails.image}
              alt="no image"
              height="420"
              width="327"
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1>{props.productDetails.title}</h1>
              <h2>Category: {props.productDetails.category}</h2>
              <p>{props.productDetails.description}</p>
            </div>
            <div className="product-price-btn product-price">
              <p>
                $<span>{props.productDetails.price}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
