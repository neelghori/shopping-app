import React, { useState } from "react";
import Product from "./Product";
import Router from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { Apiprops } from "./helper/type";
const AllProduct = (props: { sendApiData: [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortProduct, setSortProduct] = useState("");
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  toast.configure();
  const searchTermHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const sortProductHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortTerm = event.target.value;
    setSortProduct(sortTerm);
  };

  return (
    <>
      <div className="container">
        {loading ? (
          <BeatLoader size={20} color={"#000"} loading={loading} />
        ) : (
          <>
            <div className="row">
              <div className="col-4 mt-4">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={searchTermHandler}
                  />
                </div>
              </div>
              <div className="col-2 mt-4">
                <div className="input-group">
                  <select className="form-select" onChange={sortProductHandler}>
                    <option value="">Select Sort Type</option>
                    <option value="title">Title</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row ">
              {props.sendApiData
                .filter((val: { title: string; category: string }) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.category
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else {
                    return "";
                  }
                })
                .sort(
                  (
                    perval: {
                      id: number;
                      title: string;
                      price: number;
                      category: string;
                      image: string;
                    },
                    curval: any
                  ) => {
                    if (sortProduct === "") {
                      return curval;
                    } else if (sortProduct === "title") {
                      if (
                        perval.title.toLowerCase() < curval.title.toLowerCase()
                      ) {
                        return -1;
                      } else if (
                        perval.title.toLowerCase() > curval.title.toLowerCase()
                      ) {
                        return 1;
                      }
                    } else if (sortProduct === "price") {
                      if (perval.price < curval.price) {
                        return -1;
                      } else if (perval.price > curval.price) {
                        return 1;
                      }
                    }
                    return 0;
                  }
                )
                .map((curelem: Apiprops) => {
                  return (
                    <Product
                      key={curelem.id}
                      id={curelem.id}
                      title={curelem.title}
                      price={curelem.price}
                      category={curelem.category}
                      image={curelem.image}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllProduct;
