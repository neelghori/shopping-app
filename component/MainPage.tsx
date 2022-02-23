import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./navbar/Navbar";
import Router from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
const MainPage = () => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-text text-center">
          <h1>Welcome To Dumazon</h1>
        </div>

        <div className="main-button text-center">
          <Link href="/Product" passHref>
            <button>
              {loading ? (
                <BeatLoader size={20} color={"#fff"} loading={loading} />
              ) : (
                "Shop Now"
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
