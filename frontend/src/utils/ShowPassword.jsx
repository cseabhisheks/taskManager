import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import InputWithIcon from "./InputWithIcon";
import { RiLockPasswordLine} from "react-icons/ri";
export default function ShowPassword({name,placeholder,change}) {
    const [ispasswordnShowed, setPasswordShowed] = useState(false)
    return (<>
        <div className="relative" >
            <InputWithIcon icon={RiLockPasswordLine} type={ispasswordnShowed ? 'text' : 'password'} change={change} name={name} placeholder={placeholder} />
            <span className="w-10  bg-white absolute right-5 top-4 text-pink-500 text-lg" onClick={() => {
                setPasswordShowed(!ispasswordnShowed)
            }} >
                {ispasswordnShowed ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
        </div>
    </>)
}


