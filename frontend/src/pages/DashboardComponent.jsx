import TextWithIcon from "../utils/TextWithIcon"
import { IoMdAdd } from "react-icons/io";
import { CgAdd, CgHome } from "react-icons/cg";
import { BsFire } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import { CgTime } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { MdIncompleteCircle } from "react-icons/md";
import { GiSerratedSlash } from "react-icons/gi";
import { MdOutlinePendingActions } from 'react-icons/md'
import { IoMdTime } from "react-icons/io";

import { MdDelete, MdLowPriority } from "react-icons/md";
import { useState, useEffect } from 'react'
import Task from './Task'
export default function DashboardComponent() {
    const BACKEND = import.meta.env.VITE_BACKEND
    const [AddNotification, setAddNotification] = useState(false)
    const [stats, setStats] = useState({ count: '', lowPriority: '', mediumPriority: '', highPriority: '', completed: '', pending: ''  });
    const [history, setHistory] = useState([])
    const [edit, setEdit] = useState()
    const [loading, setloading] = useState(false)
    const [loadingMessage, setloadingMessage] = useState('')

  
    // fetching task history
    const statsFn = async () => {

        const link = `${BACKEND}/task/fetch`
        const res = await fetch(link, {
            method: 'GET'
        })
        const result = await res.json()
        setStats(result.stats)
        console.log(result.stats)
    }
    useEffect(() => {
        statsFn()
    }, [])

    // handle edit
    const handleEdit = (task) => {
        setEdit(task)
    }
    // fetching task history
    const taskHistory = async () => {
        setloading(true)
        setloadingMessage('your task history is being fetched/updated , please wait...')
        try {
            const link = `${BACKEND}/task/fetch`
            const res = await fetch(link, {
                method: 'GET'
            })
            const result = await res.json()
            setHistory(result.task)
            setStats(result.stats)
            setloading(false)
            statsFn()
        } catch (err) {
            setloadingMessage('error while fetching data')
            setInterval(() => {
                setloading(false)
            }, 2000)
        }



    }
    useEffect(() => {
        taskHistory()

    }, [])

    //delete
    const deleteTask = async (id) => {
        setloading(true)
        setloadingMessage('task is being deleted please wait...')
        try {
            const link = `${BACKEND}/task/remove`
            const res = await fetch(`${link}/${id}`, { method: 'DELETE' })
            const result = await res.json()
            console.log(result)
            setloading(false)
            taskHistory();
        } catch (err) {
            setloadingMessage('error while deleting task')
            setInterval(() => {
                setloading(false)
            }, 2000)
        }
    }


    // react logic
    const [isTask, setTask] = useState(false)
    const [taskExist, setTaskExist] = useState(false)// it need to be true to edit existing code
    const addTask = () => {
        setTask(true)
    }
    const backTask = () => {
        setTaskExist(false)
        setTask(false)
    }
    const notificationAddfn = () => {
        setAddNotification(true)
        setTimeout(() => {
            setAddNotification(false)
        }, 2000)
    }
    return (<>
   <div className="grid gris-cols-2">
         <div>

            <div className=" p-4 flex flex-col gap-5 ">
                {AddNotification &&
                    <div className="fixed flex text-sm items-center justify-center inset-0 p-2  text-gray-700 capitalize text-center">
                        <p className="flex items-center justify-center rounded-xl border-2  text-gray-800  bg-pink-300 px-5 py-2">{taskExist ? 'task added successfully' : 'task updated successfully'}</p>
                    </div>
                }

                {loading &&
                    <div className="fixed text-sm flex items-center justify-center inset-0 p-2  text-gray-700 capitalize text-center">
                        <p className="flex items-center justify-center rounded-xl border-2  text-gray-800  bg-pink-300 px-5 py-2">{loadingMessage}</p>
                    </div>
                }
                {isTask && (
                    <div className="inset-0 fixed flex justify-center items-center z-50  bg-black/40 backdrop-blur-sm" onClick={backTask}>
                        <div onClick={(e) => { e.stopPropagation() }} className="flex items-center justify-center">
                            <Task taskExist={taskExist} backTask={backTask} refreshTask={taskHistory} addNotification={notificationAddfn} editContent={edit} />
                        </div>
                    </div>
                )}

                {/* task overview */}
                <div className=" w-full  min-h-[100px] border-2  flex flex-wrap items-center justify-between  p-4 ">
                    <div className="min-h-[100px]  md:w-[45%] flex items-center justify-around p-4" >
                        <img src="./ak.jpeg" alt="" className="w-[50px] aspect-[1/1] rounded-[100%] mr-2" />
                        <div>
                            <h1 className="font-semibold text-xl">Task overview</h1>
                            <span className="text-pink-500">Manage your tasks efficiently</span>
                        </div>
                    </div>
                    <div className="m-auto bg-pink-200 rounded-xl flex content-center h-fit cursor-pointer hover:bg-pink-300 " onClick={addTask}>
                        <TextWithIcon icon={IoMdAdd} text='add new task' />
                    </div>

                </div>

                {/* stats */}
                <div className="grid grid-cols-2 md:grid-cols-4  text-gray-400 font-semibold gap-2 ">
                    <div className="border-2 rounded-xl px-2 flex items-center ">
                        <TextWithIcon icon={CgHome} text={stats.count} />
                        <span className="capitalize text-xs">Total tasks</span>

                    </div>
                    <div className="border-2 rounded-xl px-2 flex items-center h-[50px] ">
                        <TextWithIcon icon={BsFire} text={stats.lowPriority} />
                        <span className="capitalize text-xs text-green-400">low priority</span>

                    </div>
                    <div className="border-2 rounded-xl px-2 flex items-center h-[50px] ">
                        <TextWithIcon icon={BsFire} text={stats.mediumPriority} />
                        <span className="capitalize text-xs text-orange-400">medium priority</span>

                    </div>
                    <div className="border-2 rounded-xl px-2  flex items-center h-[50px]">
                        <TextWithIcon icon={BsFire} text={stats.highPriority} />
                        <span className="capitalize text-xs text-red-400">high priority</span>
                    </div>

                </div>
                {/* filter */}
                <div className="border-2 min-h-[80px] static md:flex justify-between items-center p-4 rounded-xl ">
                    <div>
                        <TextWithIcon text='all task' icon={BsFilter} />
                    </div>
                    <div className="flex gap-4 capitalize text-xs">
                        <div>All</div>
                        <div>today</div>
                        <div>week</div>
                        <div>high</div>
                        <div>medium</div>
                        <div>low</div>
                    </div>

                </div>
                {/* tasks history */}

                <div className="border-2 h-fit overflow-scroll rounded-xl p-4 ">

                    {history.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10">
                            No tasks available
                        </div>
                    ) : (
                        history.map((task, id) => (
                            <div key={id} className="border-2 min-h-[170px] mb-4  rounded-xl capitalize p-4 flex flex-col justify-between ">
                                <div className="flex justify-between   ">
                                    <div className="w-full">
                                        <h1 className="text-xl font-semibold">{task.title}</h1>
                                        <p className="my-2 text-xs text-gray-700 bg-gray-200 p-2 h-[60px] rounded-md w-full md:w-[700px]">{task.description}</p>
                                    </div>
                                    <div onClick={() => {
                                        setTaskExist(true)
                                        setTask(true)
                                        handleEdit(task)
                                    }} className="cursor-pointer w-fit h-fit py-2 rounded-xl hover:bg-slate-300">
                                        <SlOptionsVertical />
                                    </div>
                                </div>
                                <div className="text-sm grid grid-cols-1 md:grid-cols-2 ">
                                    <h1 className="text-green-700 font-semibold">{task.priority}</h1>
                                    <div className="flex items-center">
                                        <TextWithIcon text={new Date(task.date).toLocaleDateString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })} icon={CgTime} />
                                        <TextWithIcon text={new Date(task.deadline).toLocaleDateString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })} icon={BsCalendar} />

                                        <div className="cursor-pointer hover:bg-pink-200 rounded-xl" onClick={() => deleteTask(task._id)}>
                                            <TextWithIcon text='delete' icon={MdDelete} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        ))
                    )}
                </div>




                {/* add new task */}
                <div className="border-2 bg-pink-200  flex justify-center rounded-xl cursor-pointer hover:bg-pink-300" onClick={addTask} >
                    <TextWithIcon icon={CgAdd} text='add task' />
                </div>

            </div>

        </div>
        {/* stats */}
        <div className="border-2 border-t-0  w-full md:w-[300px] p-4 flex flex-col gap-y-4">

            <div className=" w-full  rounded-xl ">
                <div>
                    <TextWithIcon icon={IoIosTrendingUp} text='text statistics' />
                </div>
                <div className="grid grid-cols-2 text-gray-400 font-semibold gap-2 ">
                    <div className="border-2 rounded-xl px-2 ">
                        <span className="capitalize text-xs">Total tasks</span>
                        <TextWithIcon icon={BsListTask} text={stats.count} />
                    </div>
                    <div className="border-2 rounded-xl px-2 ">
                        <span className="capitalize text-xs">completed</span>
                        <TextWithIcon icon={MdIncompleteCircle} text={stats.completed} />
                    </div>
                    <div className="border-2 rounded-xl px-2 ">
                        <span className="capitalize text-xs">pending</span>
                        <TextWithIcon icon={MdOutlinePendingActions} text={stats.pending} />
                    </div>
                    <div className="border-2 rounded-xl px-2  ">
                        <span className="capitalize text-xs">completion rate</span>
                        <TextWithIcon icon={GiSerratedSlash} text={((stats.completed / stats.count) * 100).toFixed(1)} />
                    </div>

                </div>

            </div>
            <div className="border-2 w-full  p-4 capitalize text-xs rounded-xl">
                <div className="flex justify-between items-center">
                    <TextWithIcon icon={MdOutlineTaskAlt} text='task progress' />
                    <div className="bg-pink-200 py-1 px-3 rounded-xl text-purple-500  ">{`${stats.completed}/${stats.count}`}</div>
                </div>
                <div className={`h-3 w-full  bg-pink-500 rounded-xl flex items-center px-1`} >
                    <div
                        className="bg-orange-400 h-1 rounded-xl"
                        style={{ width: `${(stats.completed / stats.count) * 100}%` }}
                    ></div>
                </div>
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

   </div>
    </>)

}