import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import TextWithIcon from "../utils/TextWithIcon";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
    const [isMobile, setMobile] = useState(true)

    return (<>
        <div className=" ">
            <div className="w-full h-[70px]  flex items-center justify-around border-2 fixed  bg-white ">

                <IoMdMenu className="md:hidden md:absolute   left-10 text-xl" onClick={() => setMobile(!isMobile)} />
                <NavLink to=''>
                    <div className="flex items-center gap-2">
                        <img src="./ak.jpeg" alt="" className="w-[40px] aspect-[1/1] rounded-[100%]" />
                        <h1 className="text-xl font-semibold">  TaskManager </h1>
                    </div>
                </NavLink >
                <NavLink to='setting'>
                    <IoSettingsOutline className="text-xl" />
                </NavLink>

            </div>
            <div className="flex pt-[70px] ">
                {isMobile &&

                    <div className="flex justify-between fixed top-[70px] md:static  bg-white   border-2 ">
                        <div className="w-[300px] border-2 h-[calc(100vh-70px)] border-t-0">

                            <div className="h-[100px] border-b-2 w-full flex items-center justify-around p-4"  >
                                <img src="./ak.jpeg" alt="" className="w-[20%] aspect-[1/1] rounded-[100%]" />
                                <NavLink to=''>
                                    <div>
                                        <h1 className="font-semibold text-xl">Hey, Abhishek</h1>
                                        <span className="text-pink-500">Let's crush some task!</span>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="w-full min-h-[80px]  p-4">
                                <div className="border-2 rounded-xl h-fit p-2">
                                    <div className="flex justify-between text-sm font-semibold text-purple-500 items-center mb-2">
                                        <span className="uppercase  ">productivity</span>
                                        <span className=' bg-pink-200 px-2  rounded-xl '>100%</span>
                                    </div>
                                    <div className="h-2 w-full bg-pink-500 rounded-xl"></div>
                                </div>
                            </div>

                            <div className="w-full  h-[200px] p-4 flex flex-col gap-y-5">
                                <NavLink to='/' className={
                                    ({ isActive }) => (
                                        `hover:bg-pink-300
                                        ${isActive ? `border-2 rounded-xl bg-pink-200` : ''}`
                                    )
                                }
                                >
                                    <TextWithIcon text='dashboard' icon={IoHomeOutline} />
                                </NavLink>

                                <NavLink to='/pendingTasks' className='hover:bg-pink-100 rounded-xl '>
                                    <TextWithIcon text='pending tasks' icon={MdOutlinePendingActions} />
                                </NavLink>

                                <NavLink to='/completedTasks' className='hover:bg-pink-100 rounded-xl '>
                                    <TextWithIcon text='completed tasks' icon={IoMdDoneAll} />
                                </NavLink>
                            </div>

                            <div className="w-full h-[200px] p-4">
                                <div className="border-2 h-full rounded-xl bg-pink-200 grid grid-cols-[1fr_2fr] items-center">
                                    <FaRegLightbulb className="text-3xl text-pink-500 bg-pink-300 rounded-lg m-auto  w-12 h-12 p-2" />
                                    <div className="capitalize">
                                        <h1 className="font-semibold">pro tip</h1>
                                        <span className="text-gray-700">Use Keyboard shortcuts to boost producitvity!</span>
                                        <p className="text-purple-500">Visit @TaskManager</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                }
                <div className="w-[100vw] h-[calc(100vh-70px)]">
                    <Outlet />
                </div>
            </div>


        </div>

    </>)
}
//text gray 700