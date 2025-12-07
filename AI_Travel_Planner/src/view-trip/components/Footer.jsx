import { Link } from "react-router-dom"
    
function Footer() {
  return (
    <Link to={"https://github.com/"} target="_blank">    <div className="my-7">
      <h2 className="text-center text-gray-400">Created By Riddhik Mohite AI Travel Planner App</h2>
    </div>
    </Link>
  )
}

export default Footer
