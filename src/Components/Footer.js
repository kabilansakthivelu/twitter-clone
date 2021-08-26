import React,{useEffect, useState} from 'react'
import {RiHome7Fill, RiSearch2Line} from 'react-icons/ri'
import {IoIosNotifications, IoMdMail} from 'react-icons/io'

const Footer = () => {

const [footerShow, setFooterShow] = useState(false);

const footerCall = () =>{
    if(window.innerWidth < 1280){
    setFooterShow(true)
}else{
    setFooterShow(false)
}
}

useEffect(() =>{
window.addEventListener('resize',footerCall);
return()=>{
    window.removeEventListener('resize',footerCall)
}},[window.innerWidth])

    return (footerShow ? <footer className="fixed bottom-0 w-11/12 bg-gray-50 z-20 md:w-full">
    <hr/>
        <div className="flex justify-around py-3 md:justify-evenly lg:justify-around">
            <RiHome7Fill className="text-2xl"/>
            <RiSearch2Line className="text-2xl"/>
            <IoIosNotifications className="text-2xl"/>
            <IoMdMail className="text-2xl"/>
            </div>
        </footer>
        : ""
    )
}

export default Footer
