import { useEffect, useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addItemToCart} from '../utils/slices/cartSlice'
const Home = () => {
  const [categories, setCategories] = useState<any>();
  const [products, setProducts] = useState<any>();

  const dispatch = useDispatch();
  const fetchProduct = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=50");
      const json = await data.json();
      setProducts(json?.products);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCategories = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products/categories");
      const json = await data.json();
      console.log(json);
      setCategories(json);
    } catch (err) {
      alert("Error Occured:" + err);
    }
  };
  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, []);

  return (
    <div className="flex">
      <div className="mx-3 rounded-lg h-fit w-40 text-center justify-items-center">
        <h1 className="mx-4 my-2 font-bold text-xl">Categories</h1>
        {Array.isArray(categories) &&
          categories.map((cat) => <Category key={cat?.id} category={cat} />)}
      </div>
      <div className="flex flex-wrap justify-center text-center">
        {Array.isArray(products) &&
          products.map((prod) => (
            <div key={prod?.id} className="m-2 border-2 rounded-2xl justify-items-center shadow-xl cursor-pointer hover:scale-105 duration-300">
              <img
                className="w-60 bg-gray-50 m-4 rounded-2xl"
                src={prod?.thumbnail}
              />
              <h3 className="font-bold m-2 w-50">{prod?.title}</h3>
              <h3 className="text-gray-500 m-2 w-50">
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
              <h2 className="hover:scale-105 duration-300 mx-1" onClick={()=>dispatch(addItemToCart(prod))}>Add to Cart</h2> 
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
