import React from 'react'
import BlogThumb from '../components/BlogThumb';
import { useState,useEffect} from 'react';
import CustomButton from '../components/CustomButton';
import { useHistory,useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import AddNewBlog from './AddNewBlog';
const Home = () => {
    const [username, setUsername] =useState(" ");
    const [data,setData] = useState([
        {
        title : "title 01",
        desc : "desc 01",
        author :"xuan nhi"
        },
         {
        title : "title 2",
        desc : "desc 01",
        author :"xuan nhi"
        }
        , {
        title : "title 3",
        desc : "desc 01",
        author :"xuan nhi"
        },{
            title : "title 4",
            desc : "desc 01",
            author :"xuan nhi"
        }, {
            title : "title 5 ",
            desc : "desc 01",
            author :"xuan nhi"
        },
         {
        title : "title 6 ",
        desc : "desc 01",
        author :"xuan nhi"
        }, {
        title : "title 7",
        desc : "desc 01",
        author :"xuan nhi"
        }
    ])
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } };

    useEffect(()=>{
        const getUsername = async() => {
            try {
                const data = await localStorage.getItem("username")
                await setUsername(JSON.parse(data));
                //if(username === " " ) useHistory.replace(from);
            } catch (err)
            {
                console.log(err);
            }
        }
        getUsername();
    },[])
    const handleLogout = async () => {
        try {
            await localStorage.removeItem("username")
            await history.replace(from);
        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <div className=''>
            <header className="bg-gradient-to-r from-pink-400 to-cyan-200 font-bold text-white text-xl p-5 flex items-center justify-between">
                Welcome back, {username}
                <CustomButton title="Logout" handleEvent={()=>handleLogout()}/>
            </header>
            <AddNewBlog data={data} setData={setData} username={username} />
           <div className='container mx-auto'>
               <div className='grid grid-cols-4 '>
                   {data.map(item => {

                      return <BlogThumb blogData ={item}/>;
                   })}
           </div>
           </div>
           </div>
    )
}

export default Home;
//useEffect ko dc dder asyncd
