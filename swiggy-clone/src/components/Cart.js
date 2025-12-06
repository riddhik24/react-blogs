import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { clearItems, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className="text-center m-2 p-2">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length > 0 ? (
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
          <CategoryList items={cartItems} />

          <button
            className="p-2 m-2 bg-black text-white rounded-xl w-full cursor-pointer"
            onClick={() => dispatch(clearItems())}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-center font-bold text-2xl mt-35">
            No Items in the cart
          </h1>
          <Link to={"/"}>
            <h2 className="text-center font-bold text-xl m-4 underline">
              Click Here to Add items
            </h2>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
