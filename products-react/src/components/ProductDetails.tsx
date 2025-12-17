import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<any>();

  const { productId } = useParams();
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
    <div className="justify-items-center m-4 text-center">
      <img src={productDetails?.thumbnail} />
      <p className="w-150">{productDetails?.description}</p>
      <h2 className="font-bold">Price: €{productDetails?.price}</h2>

      <h3 className="text-gray-500 m-2">
        Shipping: {productDetails?.shippingInformation}
      </h3>
      <h3 className="text-red-500">{productDetails?.returnPolicy}</h3>
    </div>
  );
};

export default ProductDetails;
