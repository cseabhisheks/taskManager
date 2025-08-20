import { MdOutlineTaskAlt } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { MdIncompleteCircle } from "react-icons/md";
import { GiSerratedSlash } from "react-icons/gi";
import {MdOutlinePendingActions} from 'react-icons/md'
import { IoMdTime } from "react-icons/io";
import TextWithIcon from "../utils/TextWithIcon";
export default function Stats(){
    return(<>
         <div className="border-2 border-t-0  w-full md:w-[300px] p-4 flex flex-col gap-y-4">

                    <div className=" w-full  rounded-xl ">
                        <div>
                            <TextWithIcon icon={IoIosTrendingUp} text='text statistics' />
                        </div>
                        <div className="grid grid-cols-2 text-gray-400 font-semibold gap-2 ">
                            <div className="border-2 rounded-xl px-2 ">
                                <span className="capitalize text-xs">Total tasks</span>
                                <TextWithIcon icon={BsListTask} text='1' />
                            </div>
                              <div className="border-2 rounded-xl px-2 ">
                                <span className="capitalize text-xs">completed</span>
                                <TextWithIcon icon={MdIncompleteCircle} text='1' />
                            </div>
                              <div className="border-2 rounded-xl px-2 ">
                                <span className="capitalize text-xs">pending</span>
                                <TextWithIcon icon={MdOutlinePendingActions} text='1' />
                            </div>
                              <div className="border-2 rounded-xl px-2  ">
                                <span className="capitalize text-xs">completion rate</span>
                                <TextWithIcon icon={GiSerratedSlash} text='1' />
                            </div>
                       
                        </div>

                    </div>
                    <div className="border-2 w-full  p-4 capitalize text-xs rounded-xl">
                        <div className="flex justify-between items-center">
                            <TextWithIcon icon={MdOutlineTaskAlt} text='task progress' />
                            <div className="bg-pink-200 py-1 px-3 rounded-xl text-purple-500  ">1/1</div>
                        </div>
                        <div className="h-2 w-full bg-pink-500 rounded-xl"></div>
                    </div>

                    <div className="border-2 w-full h-max-[100px] p-4 capitalize text-xs rounded-xl">
                        <TextWithIcon icon={IoMdTime} text='recent activity' />
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col   text-gray-800">
                                <span className="font-semibold">Coding</span>
                                <span>15 august 2025</span>
                            </div>
                            <div>
                                <span className="bg-green-200 px-2 py-1 rounded-xl">done</span>
                            </div>
                        </div>
                    </div>
                </div>


    </>)
}