import { RES_IMG_URL } from "../utils/constants";

const CategoryList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute ">
              <button className="p-2 mx-8 w-25 bg-white shadow-lg rounded-lg cursor-pointer">
                Add +
              </button>
            </div>
            <img
              className="rounded-xl"
              src={RES_IMG_URL + item.card.info.imageId}
              alt="food image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
