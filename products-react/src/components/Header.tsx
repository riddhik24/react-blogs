import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-green-200 m-2 rounded-2xl">
            <ul className="flex justify-center font-bold text-2xl">
                <Link to={'/'}><li className="my-4 mx-10">Home</li></Link>
                <Link to={'/products'}><li className="my-4 mx-10">Products</li></Link>
                {/* <Link to={'/'}><li className="my-4 mx-10">Credits</li></Link> */}
            </ul>
        </div>
  )
}

export default Header