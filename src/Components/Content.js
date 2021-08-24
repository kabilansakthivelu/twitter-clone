import React from 'react'
import {FaUserCircle, FaRetweet, FaShareAlt} from 'react-icons/fa'
import {values} from '../values'
import {BsThreeDots, BsHeart} from 'react-icons/bs'
import {FiMessageSquare} from 'react-icons/fi'

const Content = () => {
    return (<div className="mt-14 z-10">
        {values.map((item)=>{
            return(<div key={item.id}>
        <div className="relative flex">
        <div>
             <FaUserCircle className="text-5xl"/>
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
                  <FaRetweet className="ml-12 text-gray-500"/>
                  <BsHeart className="ml-12 text-gray-500" />
                  <p className="text-gray-500 pl-2 text-sm">{item.heartsCount}</p>
                  <FaShareAlt className="absolute right-2 bottom-1 text-gray-500"/>
                  </div>
                  </div>
        </div>
                    <hr className="my-3"/>
                    </div>
        )})}
        </div> 
    )
}

export default Content
