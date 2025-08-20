import TextWithIcon from "../utils/TextWithIcon"
import { MdOutlineSecurity } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoSaveOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import InputWithIcon from "../utils/InputWithIcon";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg"; export default function Setting() {
    return (<>
        <div >
            <div className="capitalize text-sm text-gray-700 font-semibold m-3">
                <NavLink to='/'>
                    <span> <IoChevronBackOutline className="inline mr-2 " />back to dashboard</span>
                </NavLink>
            </div>
            <div className=" w-full md:w-[700px] min-h-[400px] ">
                <div className="h-[100px]  w-full md:w-[55%] flex items-center justify-around p-4 gap-4" >
                    <img src="./ak.jpeg" alt="" className="w-[50px] aspect-[1/1] rounded-[100%]" />
                    <div>
                        <h1 className="font-semibold text-xl">Account Setting</h1>
                        <span className="text-pink-500">Manage your profile and secuity setting</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
                    <div className="border-2 rounded-xl p-4">
                        <TextWithIcon text='personal information' icon={CgProfile} />
                        <form action="" className="flex flex-col gap-4">
                            <InputWithIcon icon={FaRegUser} name='name' type='text' placeholder='full name' />
                            <InputWithIcon icon={MdOutlineMail} name='mail' type='mail' placeholder='email' />

                            <label htmlFor='submit' className="flex items-center border-2  bg-pink-500 text-white p-2 rounded-2xl justify-center cursor-pointer">
                                <div className="flex items-center ">
                                    <IoSaveOutline className="text-lg" />
                                    <button type="submit" id="submit" className=" capitalize px-2 ">save changes</button>
                                </div>
                            </label>


                        </form>
                    </div>
                    <div className="border-2 rounded-xl p-4">
                        <TextWithIcon text='security' icon={MdOutlineSecurity} />
                        <form action="" className="flex flex-col gap-4">
                            <InputWithIcon icon={FiLock} name='password' type='password' placeholder='current password' />
                            <InputWithIcon icon={FiLock} name='password' type='password' placeholder='new password' />
                            <InputWithIcon icon={FiLock} name='password' type='password' placeholder='confirm password' />

                            <label htmlFor='submit' className="flex items-center border-2  bg-pink-500 text-white p-2 rounded-2xl justify-center cursor-pointer">
                                <div className="flex items-center ">
                                    <IoSaveOutline className="text-lg" />
                                    <button type="submit" id="submit" className=" capitalize px-2 ">change password</button>
                                </div>
                            </label>


                        </form>
                        <div className="w-full text-center">
                            <button type='button' className="mt-6 underline capitalize text-center text-red-500 text-sm font-semibold">logout</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>)

}