import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
function Products(props) {
  const dispatch = useDispatch();
  //   const [products, setproducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await axios.get("https://fakestoreapi.com/products");
    //   const data = res.data;
    //   setproducts(data);
    // };
    // fetchProducts();
  }, []);

  const { data: products, status } = useSelector((state) => state.product);
  // renaming data as products
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>error..</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
