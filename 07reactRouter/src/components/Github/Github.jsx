import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ehraz98')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center m-4 p-4 text-3xl text-white bg-gray-600'>
            Github Followers: {data?.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const res= await fetch('https://api.github.com/users/Ehraz98');
    return res.json();
}
