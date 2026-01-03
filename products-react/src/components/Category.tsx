import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
      <div className="my-2 text-center cursor-pointer hover:scale-105 duration-300">
      <div className="bg-gray-200 p-2 w-30 rounded-xl border border-solid">
        <h3 className="font-bold">
          <Link to={"/products/" + category.slug}>{category?.name}</Link>
        </h3>
      </div>
      </div>
  );
};

export default Category;
