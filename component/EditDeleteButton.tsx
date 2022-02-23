import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const EditDeleteButton = (props: { productId: number }) => {
  const router = useRouter();
  const { productId } = props;

  const editProductHandler = () => {
    router.push(`/product/EditProduct/${productId}`);
  };
  toast.configure();
  const deleteProductHandler = () => {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          toast.success("Product Deleted");
          router.push("/Product");
        }
      })
      .catch((err) => {
        toast.error("Product Not Deleted", { autoClose: false });
      });
  };
  const backDropHandler = () => {
    router.push("/Product");
  };
  return (
    <>
      <div className="main-icons">
        <div className="back-drop">
          <button
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onClick={backDropHandler}
          >
            <i className="bi bi-arrow-left-circle"></i>
          </button>
        </div>
        <div className="icons">
          <button
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onClick={editProductHandler}
          >
            <i className="bi bi-pencil-fill"></i>
          </button>
          <button
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onClick={deleteProductHandler}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditDeleteButton;
