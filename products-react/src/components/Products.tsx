import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {addItemToCart} from '../utils/slices/cartSlice'
import { useDispatch } from "react-redux";

export const Products = () => {
  const [products, setProducts] = useState<any>();
  const { type } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct();
  }, [type]);

  const fetchProduct = async () => {
    try {
      if (type) {
        const data = await fetch(
          "https://dummyjson.com/products/category/" + type + "?limit=20"
        );
        const json = await data.json();
        setProducts(json?.products);
        // console.log(json)
      } else {
        const data = await fetch("https://dummyjson.com/products?limit=50");
        const json = await data.json();
        setProducts(json?.products);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(type)
  return (
    <div className="flex flex-wrap justify-center text-center">
      {Array.isArray(products) &&
        products.map((prod) => (
          <div
            key={prod?.id}
            className="m-2 border-2 rounded-2xl justify-items-center shadow-2xl cursor-pointer hover:scale-105 duration-300"
          >
            <img
              className="w-60 bg-gray-50 m-4 rounded-2xl"
              src={prod?.thumbnail}
            />
            <h3 className="font-bold m-2 w-50">{prod?.title}</h3>
            <h3 className="text-gray-500 m-2 w-80">
              Shipping: {prod?.description}
            </h3>
            {/* <h2 className="font-bold">⭐{prod.rating}</h2> */}
            <h2 className="font-bold">Price: €{prod?.price}</h2>
            <div className="text-blue-500 font-bold m-2 cursor-pointer flex">
              <Link to={"/product-detail/" + prod?.id}>
                <h2 className="hover:scale-105 duration-300 mx-1">
                  See Product
                </h2>
              </Link>
              {" / "}
              <h2
                className="hover:scale-105 duration-300 mx-1"
                onClick={()=>dispatch(addItemToCart(prod))}
              >
                Add to Cart
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};
