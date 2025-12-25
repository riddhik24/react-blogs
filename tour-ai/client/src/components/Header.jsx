import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <div className='flex justify-between m-2 p-2 shadow-xl bg-blue-50 rounded-xl'>
        <div className='p-2'>
            <img className="h-20" src={logo} alt="logo" />
        </div>
        <div className="items-center">
            <ul className='flex mt-4 text-xl font-bold'>
                <li className='m-2 p-2 cursor-pointer'><Link to={'/'}>Home</Link></li>
                <li className='m-2 p-2 cursor-pointer'><Link to={'/create-trip'}>Create Trip</Link></li>
                <li className='m-2 p-2 cursor-pointer'><Link to={'/Contact'}>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}
