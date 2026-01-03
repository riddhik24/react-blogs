import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from "../utils/slices/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  return (
    <div className="m-2 p-2">
      {cartItems.length > 0 ? (
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
          <button
            className="p-2 m-2 bg-black text-white rounded-xl w-full cursor-pointer"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <div
              key={item?.id}
              className="p-2 m-2 border-b border-gray-300 text-left flex justify-between font-bold text-lg"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item?.title}</span>
                  <span>Price: €{item?.price}</span>
                </div>

                <p className="text-xs">{item?.description}</p>
              </div>
              <div className="w-3/12">
                <div className="absolute">
                  <button
                    className="p-2 mx-8 w-10 bg-white shadow-lg rounded-lg cursor-pointer"
                    onClick={() => dispatch(addItemToCart(item))}
                  >
                    +
                  </button>
                  <button
                    className="p-2 mx-8 w-10 bg-white shadow-lg rounded-lg cursor-pointer"
                    onClick={() => dispatch(removeItemFromCart(item))}
                  >
                    -
                  </button>
                </div>
                <img
                  className="rounded-xl w-50"
                  src={item?.thumbnail}
                  alt="food image"
                />
              </div>
            </div>
          ))}
          {cartItems.length > 0 && <Link to={'/checkout'}><button
            className="p-2 m-2 bg-green-400 text-white rounded-xl w-full cursor-pointer"
          >
            Checkout
          </button> 
          </Link>}
        </div>
      ) : (
        <h1 className="font-bold text-4xl text-center m-2 py-60">
          Cart is empty.
        </h1>
      )}
    </div>
  );
};

export default Cart;
