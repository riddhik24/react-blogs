import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState<any>();
  const { type } = useParams();

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
          <div className="m-2 border-2 rounded-2xl justify-items-center">
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
            <Link to={"/product-detail/" + prod?.id}>
              <h2 className="text-blue-500 font-bold m-2 cursor-pointer">
                See Product
              </h2>
            </Link>
          </div>
        ))}
    </div>
  );
};
