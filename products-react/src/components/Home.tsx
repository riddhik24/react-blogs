import { useEffect, useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState<any>();

  const [products, setProducts] = useState<any>();
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
      <div className="mx-3 rounded-lg bg-blue-300 h-fit w-40 text-center justify-items-center">
        <h1 className="mx-4 my-2 font-bold text-xl">Categories</h1>
        {Array.isArray(categories) &&
          categories.map((cat) => <Category key={cat?.id} category={cat} />)}
      </div>
      <div className="flex flex-wrap justify-center text-center">
        {Array.isArray(products) &&
          products.map((prod) => (
            <div className="m-2 border-2 rounded-2xl justify-items-center">
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
              <Link to={"/product-detail/" + prod?.id}>
                <h2 className="text-blue-500 font-bold m-2 cursor-pointer">
                  See Product
                </h2>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
