import React, { useEffect, useState } from "react";
import Router from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const EditForm = (props: {
  id: number;
  title: string;
  descript: string;
  price: number;
  category: string;
}) => {
  const [titles, setTitles] = useState<string>(props.title);
  const [prices, setPrice] = useState(props.price);
  const [descriptions, setDescription] = useState(props.descript);
  const [categorys, setCategory] = useState(props.category);
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  const router = useRouter();
  useEffect(() => {
    setTitles(props.title);
    setPrice(props.price);
    setDescription(props.descript);
    setCategory(props.category);
  }, [props.title, props.price, props.descript, props.category]);
  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitles(event.target.value);
  };
  const priceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+event.target.value);
  };
  const descriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };
  const categoryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  toast.configure();
  const editFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const editProductData = {
      title: titles,
      price: prices,
      description: descriptions,
      category: categorys,
    };

    fetch(`https://fakestoreapi.com/products/${props.id}`, {
      method: "PUT",
      body: JSON.stringify(editProductData),
    })
      .then((res) => res.json())
      .then((json) => {
        toast.success("Product is Update", { autoClose: 1000 });
        router.push(`/product/${props.id}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed To Fetch", { autoClose: false });
      });
  };

  return (
    <div>
      <div className="container-fluid px-1 py-5 mx-auto overflow-hidden">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            {loading && (
              <BeatLoader size={20} color={"#000"} loading={loading} />
            )}
            <div className="card">
              <h5 className="text-center mb-4">Edit Product Details</h5>
              <form className="form-card" onSubmit={editFormHandler}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={titles}
                      onChange={titleHandler}
                      placeholder="Enter Product Title"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Category</label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={categorys}
                      onChange={categoryHandler}
                      placeholder="Enter  Product Category"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={prices}
                      onChange={priceHandler}
                      placeholder="Enter Price"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Image
                    </label>
                    <input type="file" id="image" name="image" placeholder="" />
                  </div>
                </div>

                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Description
                    </label>
                    <textarea
                      placeholder="Enter Product Description"
                      value={descriptions}
                      onChange={descriptionHandler}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group col-sm-6 mt-4">
                    <button type="submit" className="btn-block btn-primary">
                      Edit Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
