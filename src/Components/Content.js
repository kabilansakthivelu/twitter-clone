import React,{useEffect, useState} from 'react'
import {FaUserCircle, FaRetweet, FaShareAlt, FaFeatherAlt} from 'react-icons/fa'
import {values} from '../values'
import {BsThreeDots, BsHeart} from 'react-icons/bs'
import {FiMessageSquare} from 'react-icons/fi'
import {trending} from '../trending'
import {whoToFollow} from '../whoToFollow'

const Content = () => {

const [tweet, setTweet] = useState(false);

useEffect(() =>{
if(window.innerWidth >= 1024 && window.innerWidth < 1280){
    setTweet(true)
}else{
    setTweet(false)
}
},[])

    return (<div className="mt-14 z-10 mb-8 flex">
    <div className="md:mx-16 md:border-l-2 md:border-r-2 lg:w-7/12 lg:ml-4 lg:mr-4">
        {values.map((item)=>{
            return(<div key={item.id}>
        <div className="relative flex md:mr-4">
        <div>
             <FaUserCircle className="text-5xl md:ml-4"/>
             </div>
                <div>
             <div className="flex">
                 <p className="pl-4 max-w-1/4 overflow-hidden font-extrabold">{item.name}</p>
                 <p className="pl-4 text-sm pt-0.5 text-gray-500">{item.time}</p>
                  <BsThreeDots className="absolute right-2 top-1 text-gray-500"/>
                  </div>
                  <p className="pl-4 text-sm">{item.mainContent}</p>
                  <div className="flex mt-3">
                  <FiMessageSquare className="ml-4 text-gray-500"/>
                  <FaRetweet className="ml-12 text-gray-500 md:ml-28"/>
                  <BsHeart className="ml-12 text-gray-500 md:ml-28" />
                  <p className="text-gray-500 pl-2 text-sm">{item.heartsCount}</p>
                  <FaShareAlt className="absolute right-2 bottom-1 text-gray-500 md:right-20"/>
                  </div>
                  </div>
        </div>
                    <hr className="my-3"/>
                    </div>
        )})}
        </div>
        <div>
        {tweet ? <div><div className="w-96 mt-2 rounded-2xl p-4 min-h-0 bg-gray-300">
        <h3 className="font-extrabold text-xl text-blue-500">What's happening</h3>
        {trending.map((item)=>{
            return(<div key={item.id} className="mt-4">
            <p className="text-sm">{item.topic}</p>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p>{item.tweetsCount}</p>
           </div> )
        })}
                <p className="text-md text-blue-500 mt-4">Show more</p>
        </div> 
        <div className="w-96 mt-4 rounded-2xl p-4 min-h-0 bg-gray-300">
<p className="font-extrabold text-xl text-blue-500">Who to follow</p>
{whoToFollow.map((item)=>{
    return(<div key={item.id}>
<div className="flex mt-4 relative">
<FaUserCircle className="text-5xl my-2"/>
<div className="flex flex-col">
<p className="text-md font-bold ml-4 mt-2">{item.username}</p>
<p className="text-sm ml-4">{item.userid}</p>
</div>
<button className="w-20 h-10 mt-2 bg-blue-500 absolute right-4 rounded-3xl">Follow</button>
</div>
</div>)})}
   <p className="text-md text-blue-500 mt-4">Show more</p>
        </div>
        </div>
        : 
        ""}
        </div>
        {tweet ? <div className="text-4xl flex lg:w-40 lg:h-16 lg:pl-4 lg:pt-2 bg-blue-500 text-white rounded-full border-transparent p-1 border-2 fixed bottom-16 right-7"><FaFeatherAlt/><p className="text-2xl ml-2 mt-1">Tweet</p></div> : <FaFeatherAlt className="text-4xl w-12 h-12 bg-blue-500 text-white rounded-full border-transparent p-1 border-2 fixed bottom-16 right-7"/>}
        </div> 
    )
}

export default Content
