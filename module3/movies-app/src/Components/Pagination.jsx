

export default function Pagination({pageNo,handleNext,handlePrev}){

    return(
        <div className="flex justify-center p-4 mt-8 items-center bg-gray-400">
            <div onClick={handlePrev} className="px-8 hover:cursor-pointer "><i className="fa-solid fa-arrow-left"></i></div>
            <div className="px-8 font-bold hover:cursor-pointer">{pageNo}</div>
            <div onClick={handleNext} className="px-8 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}