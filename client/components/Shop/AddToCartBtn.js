import React from "react";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";

const AddToCartBtn = ({ id }) => {
  // console.log(id)
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      id,
    });
    addToast("Chọn món thành công", { appearance: "success" });
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        addToCart();
      }}
      className="add-to-cart-btn"
    >
      Thêm vào giỏ
    </div>
  );
};

export default AddToCartBtn;
