import React from 'react'

const CustomButton = ({title, handleEvent, className=" "}) => {
    return (
        <div>
            <button onClick={()=>handleEvent()} className={` ${className} bg-pink-200 text-white font-light px-5 py-2 text-sm rounded-sm my-4`}>
                    {title}
            </button>
        </div>
    )
}

export default CustomButton;
