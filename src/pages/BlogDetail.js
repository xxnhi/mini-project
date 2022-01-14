import React from 'react'
import CustomButton from '../components/CustomButton';

const BlogDetail = () => {
    return (
        <div>
            <div className='bg-gray-200 h-48 w-full'>
                This is the blog cover
                </div>
            <div className="container mx-auto">
            <div className='text-3xl font-semibold text-gray-800 my-5'>
                <h1>This is the title</h1>
                <div className='flex'>
                    <CustomButton title="Delete"/>
                    <CustomButton title="Edit" className='mx-5'/>
                </div>
                <h3 className='text-xl font-bold my-20' >This is the author</h3>
                <p >
                    This is the description
                </p>
            </div>
            </div>
        </div>
    )
}

export default BlogDetail;
