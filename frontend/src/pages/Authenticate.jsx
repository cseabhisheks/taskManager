import { FiUser } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import InputWithIcon from "../utils/InputWithIcon";
export default function Authenticate() {
  const [isLogin, setIslogin] = useState(true)
  const [ispasswordnShowed, setPasswordShowed] = useState(false)


  return (<>
    <div className="flex justify-center items-center h-[100vh] w-[100vw] text-xs md:text-sm ">
      <div className="capitalize border-2 w-[80%] md:w-[400px] h-fit rounded-xl p-4 shadow-[0px_0px_11px_0px_black]    ">

        <div className=" flex flex-col items-center gap-2 p-4 "  >
          <img src="./ak.jpeg" alt="" className="w-20 h-20 rounded-[100%] border-2 border-black" />
          <h1 className=" font-semibold text-xl"> {isLogin ? 'welcome back' : 'create account'}</h1>
          <span className=" text-gray-500 text-sm">join taskflow to manage your task</span>
        </div>

        <form action="" className="flex flex-col gap-5">

          {!isLogin && <><InputWithIcon icon={FiUser} type='text' name='username' placeholder='enter your username' /></>}
          <InputWithIcon className='border-2 border-red-500' icon={MdOutlineEmail} type='email' name='email' placeholder='enter your email' />
          <div className="relative" >
            <InputWithIcon icon={RiLockPasswordLine} type={ispasswordnShowed ? 'text' : 'password'} name='password' placeholder='enter your password' />
            <span className="w-10  bg-white absolute right-5 top-4 text-pink-500 text-lg" onClick={() => {
              setPasswordShowed(!ispasswordnShowed)
            }} >
           {ispasswordnShowed?<FaRegEye/>:<FaRegEyeSlash/>}
            </span>
          </div>


          <label htmlFor='submit' className="flex items-center border-2  bg-pink-500 text-white p-2 rounded-2xl justify-center cursor-pointer">
            <div className="flex items-center ">
              <FaUserPlus className="text-lg" />
              <button type="submit" id="submit" className=" capitalize px-2 ">{isLogin ? 'login' : 'sign up'}</button>
            </div>
          </label>
        </form>

        <div className="w-fit m-auto mt-3 ">
          <span className="text-gray-500 ">{isLogin ? 'dont have an account' : 'already have an account?'} <span onClick={() => { setIslogin(!isLogin) }} className="text-pink-500 font-semibold cursor-pointer "> {isLogin ? 'sign up' : 'login'}</span></span>
        </div>

      </div>
    </div>
  </>)
}

// gray color text-gray-500
//pink-500

//break common code into util