import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrBlog } from "react-icons/gr";

export const Footer = () => {
  return (
    <div className='mx-2 my-4 p-5 text-center justify-center flex'>
        <h1>Created By Riddhik Mohite ©</h1>
        <div className='font-bold justify-end flex self-center'>

        <a className='mx-2' href='https://www.linkedin.com/in/riddhik-mohite-689354259/' target='_blank'><FaLinkedin/></a>
        <a className='mx-2' href='https://www.github.com/riddhik24' target='_blank'><FaGithub/></a>
        <a className='mx-2' href='https://riddhik24.github.io/' target='_blank'><GrBlog/></a>
        </div>
    </div>
  )
}
