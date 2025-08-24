import TextWithIcon from "../utils/TextWithIcon"
import { MdOutlineSecurity } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoSaveOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import InputWithIcon from "../utils/InputWithIcon";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import ShowPassword from "../utils/ShowPassword";

export default function Setting() {
    const [userProfile, setUserProfile] = useState(true)
    const [form, setForm] = useState({
        username: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [loading, setloading] = useState(false)
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [loadingMessage, setloadingMessage] = useState('')
    const BACKEND = import.meta.env.VITE_BACKEND
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => {
            const updatedForm = { ...prev, [name]: value };
            console.log('uf: ',updatedForm); //  it need to fix print two time
             if (form.newPassword && form.confirmPassword) {
            setPasswordCheck(updatedForm.newPassword !== updatedForm.confirmPassword);
        } else {
            setPasswordCheck(false);
        }
            return updatedForm;
        }
        )
       
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const link = userProfile ? 'userProfile' : 'password'
        const { username, email, currentPassword, newPassword, confirmPassword } = form
        const data = userProfile ? { username, email } : { currentPassword, newPassword, confirmPassword }
        console.log(data)

        try {
            const res = await fetch(`${BACKEND}/updateCredential/${link}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await res.json()
            if (result.success) {
                setloadingMessage('You are successfully changed data 🎉! ')
                setloading(true)
                setTimeout(() => {
                    setloading(false)
                }, 3000)
            }
            else {
                setloadingMessage('Some error ooccurs 😒,Please Try again')
                setloading(true)
                setTimeout(() => {
                    setloading(false)
                }, 3000)

            }
            console.log(result)
        } catch (err) {
            console.log(err)
        }

    }


    return (<>
        {loading &&
            <div className="z-10 fixed text-xs  flex items-center justify-center inset-0 p-2  text-gray-700 capitalize text-center">
                <p className="flex items-center justify-center rounded-xl border-2  text-gray-800  bg-pink-300 px-5 py-2">{loadingMessage}</p>
            </div>
        }
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
                        <form onSubmit={(e) => {
                            setUserProfile(true)
                            submitForm(e)
                        }} className="flex flex-col gap-4">
                            <InputWithIcon icon={FaRegUser} name='username' type='text' placeholder='username' change={handleChange} />
                            <InputWithIcon icon={MdOutlineMail} name='email' type='email' placeholder='email' change={handleChange} />

                            <label htmlFor='profileSubmit' className="flex items-center border-2  bg-pink-500 text-white p-2 rounded-2xl justify-center cursor-pointer">
                                <div className="flex items-center ">
                                    <IoSaveOutline className="text-lg" />
                                    <button type="submit" id="profileSubmit" className=" capitalize px-2 ">save changes</button>
                                </div>
                            </label>


                        </form>
                    </div>
                    <div className="border-2 rounded-xl p-4">
                        <TextWithIcon text='security' icon={MdOutlineSecurity} />
                        <form onSubmit={(e) => {
                            setUserProfile(false)
                            submitForm(e)
                        }} className="flex flex-col gap-4">

                            <ShowPassword name='currentPassword' placeholder='current password' change={handleChange} />
                            <ShowPassword name='newPassword' placeholder='new password' change={handleChange} />
                            <ShowPassword name='confirmPassword' placeholder='confirm password'
                                change={(e) => {
                                    handleChange(e)
                                }}
                            />
                            {passwordCheck && <span className="capitalize text-red-800 underline text-xs text-center ">both password must be same</span>}
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