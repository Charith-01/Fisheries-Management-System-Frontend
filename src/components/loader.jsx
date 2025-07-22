import { IoFishOutline } from "react-icons/io5";

export default function Loader(){
    return(
        <div className="w-full h-full flex justify-center items-center bg-white">
        <div className="relative w-[90px] h-[90px] border-[5px]  border-blue-600 border-l-blue-400 border-r-blue-300 rounded-full animate-spin shadow-lg">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-blue-600"><IoFishOutline /></div>
        </div>
        </div>
    )
}
