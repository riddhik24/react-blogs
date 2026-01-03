import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {addItemToCart} from '../utils/slices/cartSlice'
const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<any>();

  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products/" + productId);
      const json = await data.json();
      setProductDetails(json);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div className="justify-items-center m-4 h-auto text-center">
      <img src={productDetails?.thumbnail} />
      <h2 className="font-bold">{productDetails?.title}</h2>
      <p className="w-150">{productDetails?.description}</p>
      <h2 className="font-bold">Price: €{productDetails?.price}</h2>

      <h3 className="text-gray-500 m-2">
        Shipping: {productDetails?.shippingInformation}
      </h3>
      <h3 className="text-red-500">{productDetails?.returnPolicy}</h3>
      <button className="rounded-2xl bg-white w-40 h-10 m-2 shadow-xl cursor-pointer hover:scale-105 duration-300" onClick={()=> dispatch(addItemToCart(productDetails))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
