import React from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
const BlogThumb = ({blogData}) => {
    return (
        <div>
           <div className='bg-gray-100 p-5 m-5 rounded-2xl h-72 col-span-1 '>
                       <div className='bg-white rounded-xl m-5 h-48 w-auto'><div/>
                       <h3 className='font-semibold text-gray-800 text-xl my-4'>This is the title</h3>
                       {blogData?.title || " "}
                       <p>Written by {blogData?.author || " "}</p>
                       <Link to="detail">
                       <CustomButton title="more" handleEvent={()=>{}}   />         
                       </Link>
                    </div> 
               </div> 
        </div>
    )
}

export default BlogThumb
