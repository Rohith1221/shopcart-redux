import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
function Cart() {
  const products = useSelector((state) => state.cart);
  console.log(products);

  const dispatch = useDispatch();

  const handleRemove = (prodid) => {
    dispatch(remove(prodid));
  };

  return (
    <div>
      <div>Cart</div>
      <div className="cartWrapper">
        {products.map((item, index) => (
          <div className="cartCard" key={index}>
            <img src={item.image} alt="alt"></img>
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
