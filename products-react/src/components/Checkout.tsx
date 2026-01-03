import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,clearCart
} from "../utils/slices/cartSlice";
import { useNavigate } from 'react-router-dom';
export const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = items.length > 0 ? 2 : 0;
  const total = subtotal + (items.length > 0 ? shipping : 0);

  const navigate = useNavigate();
  const checkoutHandler = () =>{
    if(total === 0){
        alert('Invalid amount')
    }else{
    alert('Checkout Successful');
    navigate('/');
    dispatch(clearCart());
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Checkout Form (8 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <div className="grid grid-cols-2 gap-4">
                <label className=" font-semibold text-lg">Name</label>
            <label className="p-3"></label>
              <input type="text" placeholder="First Name" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500" required/>
              <input type="text" placeholder="Last Name" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500" required/>
            <label className=" font-semibold text-lg">Address</label>
            <label className="p-3"></label>
              <input type="text" placeholder="Room No. / Blg / Apt" className="border p-3 rounded-lg focus:ring-2 focus:ring-black" required/>
              <input type="text" placeholder="Street Line No. 1" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue" required/>
              <input type="text" placeholder="Street Line No. 2" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue" required/>
              <input type="number" placeholder="Pincode" className="border p-3 rounded-lg focus:ring-2 focus:ring-blue" required/>
            <label className="font-semibold text-lg">Payment Method: Cash on Delivery</label>
            <label className="p-3"></label>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition" onClick={checkoutHandler}>
            Complete Order (${total})
          </button>
        </div>

        {/* Right: Order Summary (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 rounded-xl shadow-sm border sticky top-6">
            <h2 className="text-lg font-bold mb-4">Your Cart ({items.length})</h2>
            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <div key={item.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.thumbnail} alt="" className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">{item?.title}</p>
                      <button 
                        onClick={() => dispatch(removeItemFromCart(item?.id))}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold">${item.price}</p>
                </div>
              ))}
            </div>
            <h2 className='font-semibold'>Shipping Charges: ${shipping}</h2>
            {/* Total Calculation    section remains same... */}
          </div>
        </div>

      </div>
    </div>
  );
};