import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Product = (props: {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}) => {
  const { id, title, price, category, image } = props;

  const singleProduct = `/product/${id}`;
  //console.log(singleProduct);
  return (
    <>
      <div className="col-3 p-2">
        <div className="card card_body">
          <Image
            src={image}
            className="card-img-top"
            alt="..."
            width="120px"
            height="350px"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <h6>Category: {category}</h6>
            <h3 className="card-title text-center">${price}</h3>

            {/* <p className="card-text">{item.description}</p> */}
            <Link href={singleProduct}>
              <a className="btn btn-primary">More Details</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
