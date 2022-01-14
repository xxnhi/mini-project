import React from 'react'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
const AddNewBlog = ({data,setData,username}) => {
    const [blog, setBlog] = useState({
        title : " ",
        desc : " ",
        author : ""
    })

    const handleAdd = () => {
        const newData = data.splice(0);
        setBlog({...blog, author : username});
        newData.push(blog);
        setData(newData);
    };

    return (
        <div className='container mx-auto mt-12'>
            <h1 className='text-pink-500 font-semibold text-2xl'>Wanna add something, Xuan Nhi</h1>
            <div>
                <div>
                    <p className='mt-10'>Your blog name: </p>
                    <input className='border border-gray-500 px-4 py-3 text-xl w-1/3 rounded-2xl' name="title" 
                    value={blog.title} 
                    onChange={e => setBlog({...blog, title : e.target.value})} />
                    <p>Your blog description : </p>


                    <input className='border border-gray-500 px-4 py-3 text-xl w-1/3 rounded-2xl' name="desc" 
                    value={blog.desc}
                     onChange={e => setBlog({...blog, desc : e.target.desc})}/>
                </div>
                <div className='flex justify-start'>
                    <Link to="/">
                    <CustomButton title="Cancel" handleEvent={()=> {}} />
                    </Link>
                    <CustomButton title="Submit"
                     className='mx-5'
                      handleEvent={()=> {handleAdd()}} />

                </div>
            </div>
        </div>
    )
}

export default AddNewBlog
// quản lys bất kỳ form nào thì cũng cần có một state