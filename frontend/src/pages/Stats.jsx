import { MdOutlineTaskAlt } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { MdIncompleteCircle } from "react-icons/md";
import { GiSerratedSlash } from "react-icons/gi";
import { MdOutlinePendingActions } from 'react-icons/md'
import { IoMdTime } from "react-icons/io";
import { useState, useEffect } from "react";
import TextWithIcon from "../utils/TextWithIcon";
export default function Stats() {
    const [stats, setStats] = useState({ count: '', completed: '', pending: '' });
    const BACKEND = import.meta.env.VITE_BACKEND
    // fetching task history
    const statsFn = async () => {

        const link = `${BACKEND}/task/fetch`
        const res = await fetch(link, {
            method: 'GET'
        })
        const result = await res.json()
        setStats(result.stats)
    }
    useEffect(() => {
        statsFn()
    }, [])

    return (<>


    </>)
}