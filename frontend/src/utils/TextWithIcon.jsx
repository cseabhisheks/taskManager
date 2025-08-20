export default function TextWithIcon({icon:Icon,text}) {
    return (<>
        <div className="flex  px-3 items-center gap-2 font-semibold capitalize my-2 text-base">
            <Icon className="text-pink-500 text-base" />
            <h1 className="text-gray-700">{text}</h1>
        </div>
    </>)
}