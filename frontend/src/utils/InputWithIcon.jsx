export default function InputWithIcon({icon:Icon,name,type,placeholder,change,value}) {
    return (<>
        <label htmlFor={name} className="flex items-center border-2 px-2 rounded-2xl h-12 focus-within:border-pink-500 overflow-hidden">
            <Icon className="text-lg text-pink-500" />
            <input type={type} id={name} name={name} placeholder={placeholder} onChange={change } value={value} className="w-full h-full px-2 capitalize outline-none " />
        </label>
    </>)
}