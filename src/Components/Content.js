import React,{useEffect, useState} from 'react'
import {FaUserCircle, FaRetweet, FaShareAlt, FaFeatherAlt, FaTwitter, FaUserAlt} from 'react-icons/fa'
import {values} from '../values'
import {BsThreeDots, BsHeart, BsSearch, BsCardList} from 'react-icons/bs'
import {FiMessageSquare, FiHash, FiBookmark} from 'react-icons/fi'
import {RiHome7Fill, RiSearch2Line} from 'react-icons/ri'
import {IoIosNotifications, IoMdMail} from 'react-icons/io'
import {CgMoreO} from 'react-icons/cg'
import {trending} from '../trending'
import {whoToFollow} from '../whoToFollow'

const Content = () => {

const [tweet, setTweet] = useState(false);
const [fullScreen, setFullScreen]=useState(false);

const responsiveScreen = () =>{
    if(window.innerWidth >= 1024 && window.innerWidth <1280){
    setTweet(true)
}else if(window.innerWidth >= 1280){
    setTweet(true)
    setFullScreen(true)
}
else{
    setTweet(false)
    setFullScreen(false)
}
}

const fullScreenCheck = () =>{
    if(window.innerWidth >= 1280){
        setTweet(true)
        setFullScreen(true)
    }
}

useEffect(() =>{
fullScreenCheck();
window.addEventListener('resize',responsiveScreen);
return()=>{
    window.removeEventListener('resize',responsiveScreen)
}},[window.innerWidth])

    return (<div className="mt-14 z-10 mb-8 xl:mb-0 flex">
    {fullScreen ? 
<div>
<div className="sticky top-20">
<FaTwitter className="text-3xl ml-12"/>
<div className="flex text-3xl my-4 pl-12 mr-0"><RiHome7Fill/><p className="pl-4 text-2xl">Home</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><FiHash/><p className="pl-4 text-2xl">Explore</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><IoIosNotifications/><p className="pl-4 text-2xl">Notifications</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><IoMdMail/><p className="pl-4 text-2xl">Messages</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><FiBookmark/><p className="pl-4 text-2xl">Bookmarks</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><BsCardList/><p className="pl-4 text-2xl">Lists</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><FaUserAlt/><p className="pl-4 text-2xl">Profile</p></div>
<div className="flex text-3xl my-4 pl-12 mr-0"><CgMoreO/><p className="pl-4 text-2xl">More</p></div>
</div>
</div>
:
""}
    <div className="md:mx-16 md:border-l-2 md:border-r-2 lg:w-7/12 lg:ml-4 lg:mr-4 xl:w-2/2 xl:ml-32">
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
                  <FaRetweet className="ml-10 vsm:ml-14 sm:ml-28 text-gray-500 md:ml-28"/>
                  <BsHeart className="ml-10 vsm:ml-14 sm:ml-28 text-gray-500 md:ml-28" />
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
        {tweet ? <div className="sticky -top-100 xl:-top-80 xl:mr-20">
         <div className="hidden xl:block xl:mr-20 w-96 mt-0 rounded-2xl p-4 min-h-0 bg-gray-300 h-14 fixed top-0 z-30">
            <BsSearch className="relative top-1 left-2"/>
            <p className="float-right relative -top-4 right-40">Search Twitter.......</p>
         </div>
        <div className="w-96 rounded-2xl p-4 min-h-0 bg-gray-300">
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
   <p className="text-md text-blue-500 mt-4 sticky top-0">Show more</p>
        </div>
        <p className="text-gray-500 text-sm pt-4">Terms of Service</p>
        <p className="text-gray-500 text-sm pt-2">Privacy policy</p>
        <p className="text-gray-500 text-sm pt-2">Cookie policy</p>
        <p className="text-gray-500 text-sm pt-2">Ads</p>
        <p className="text-gray-500 text-sm pt-2">Info</p>
        <p className="text-gray-500 text-sm pt-2">More</p>
        <p className="text-gray-500 text-sm py-2">This is twitter clone</p>
        </div>
        : 
        ""}
        </div>
        {tweet ? <div className="text-4xl flex lg:w-40 lg:h-16 lg:pl-4 lg:pt-2 bg-blue-500 xl:hidden text-white rounded-full border-transparent p-1 border-2 fixed bottom-16 right-7"><FaFeatherAlt/><p className="text-2xl ml-2 mt-1">Tweet</p></div> : <FaFeatherAlt className="text-4xl w-12 h-12 bg-blue-500 text-white rounded-full border-transparent p-1 border-2 fixed bottom-16 right-7"/>}
        </div> 
    )
}

export default Content
