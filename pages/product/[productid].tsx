import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ProductDetails from "../../component/ProductDetails";
import Navbar from "../../component/navbar/Navbar";
import { GetStaticProps, GetStaticPaths } from "next";
import { Apiprops } from "../../component/helper/type";

const ProductId = (props: { data: Apiprops }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="text-center">
      <Navbar />
      {loading ? (
        <BeatLoader size={20} color={"#000"} loading={loading} />
      ) : (
        <ProductDetails productDetails={props.data} />
      )}
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((curElem: { id: number }) => {
    return {
      params: {
        productid: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(typeof context);
  const id = context.params?.productid;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
export default ProductId;
