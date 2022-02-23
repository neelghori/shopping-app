import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import AllProduct from "./AllProduct";
import BeatLoader from "react-spinners/BeatLoader";
const HomePage = (props: { productsData: [] }) => {
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
        <AllProduct sendApiData={props.productsData} />
      )}
    </div>
  );
};

export default HomePage;
