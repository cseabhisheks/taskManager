import InputWithIcon from "../utils/InputWithIcon"
import TextWithIcon from "../utils/TextWithIcon"
import { CgAdd } from "react-icons/cg"
import { MdOutlineTask, MdOutlineDescription } from "react-icons/md"
import { MdDownloadDone } from "react-icons/md";
import { MdFlag } from "react-icons/md";
import { useState } from 'react'

export default function Task({ taskExist, backTask, refreshTask, addNotification, editContent }) {
    const [form, setForm] = useState({ title: '', description: '', priority: 'low', status: '', deadline: new Date() })

    const isUpdate = taskExist
    const changefn = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const submit = async (e) => {
        const link = isUpdate?'http://192.168.1.6:2030/task/edit':'http://192.168.1.6:2030/task/add'
        e.preventDefault()
        const formData=isUpdate?{...form,id:editContent._id}:form
        const res = await fetch(link, {
            method: isUpdate?'PATCH':'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()


        addNotification()
        refreshTask()
        backTask()

    }


    return (<>

        <div className="border-2 w-fit h-fit p-4 fixed bg-white  ">
            <div >
                <div className='flex justify-center items-center'>
                    <TextWithIcon icon={CgAdd} text={isUpdate ? 'edit task' : 'create new task'} />
                    <span className="cursor-pointer font-semibold absolute right-5" onClick={backTask}>X</span>
                </div>
                <form className="flex flex-col gap-4" onSubmit={submit}>
                    <InputWithIcon name='title' type='text' change={changefn} placeholder='title' icon={MdOutlineTask} />
                    <InputWithIcon name='description' type='text' change={changefn} placeholder='describe' icon={MdOutlineDescription} />

                    <div className="grid grid-cols md:grid-cols-2 gap-7">
                        <label htmlFor="priority" className="relative">
                            <TextWithIcon icon={MdFlag} text='priority' />
                            <select name="priority" id="priority" className="border-2 w-full px-2 bg-gray-300 rounded-xl  " onChange={changefn}>
                                <option value="low" className="bg-green-400">low</option>
                                <option value="medium" className="bg-orange-400">Medium</option>
                                <option value="high" className="bg-red-400">High</option>
                            </select>

                        </label>
                        <label htmlFor="deadline">
                            <TextWithIcon icon={MdFlag} text='DeadLine' />
                            <input type="date" name="deadline" id="deadline" className="border-2 w-full px-2 bg-gray-300 rounded-xl" onChange={changefn} />
                        </label>
                    </div>

                    <label htmlFor="status" className="text-sm flex gap-6 capitalize text-gray-700 font-semibold ">
                        <span>Status : </span>
                        <div>
                            <input type="radio" name="status" id="completed" onChange={changefn} />
                            <span>Completed</span>
                        </div>
                        <div>
                            <input type="radio" name="status" id="inProgress" onChange={changefn} />
                            <span>in progress</span>
                        </div>
                    </label>

                    <label htmlFor='submit' className="flex items-center border-2  bg-pink-500 text-white p-2 rounded-2xl justify-center cursor-pointer">
                        <div className="flex items-center ">
                            <MdDownloadDone className="text-lg" />
                            <button type="submit" id="submit" className=" capitalize px-2 ">{isUpdate ? 'update task' : 'create task'}</button>
                        </div>
                    </label>

                </form>
            </div>
        </div>

    </>)
}