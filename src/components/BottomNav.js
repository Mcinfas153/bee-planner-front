import React from 'react'
import { Link } from "react-router-dom";
import { BsHouseFill, BsFileText, BsGraphUp, BsThreeDots, BsWallet2 } from "react-icons/bs";

export default function BottomNav() {
    return (
        <div className='flex justify-center'>
            <div className='fixed bottom-0 border w-full bg-white px-5 py-5 rounded-full -mb-1 drop-shadow-2xl'>
                <div class="flex justify-between">
                    <div className='px-2'><BsWallet2 className='text-xl' /></div>
                    <Link to="/profits"><div className='px-2'><BsGraphUp className='text-xl' /></div></Link>
                    <Link to="/"><div className='px-5 py-4 bg-sky-400 rounded-full flex justify-center -mt-10'><BsHouseFill className='text-white text-3xl' /></div></Link>
                    <Link to="/transactions"><div className='px-2'><BsFileText className='text-xl' /></div></Link>
                    <div className='px-2'><BsThreeDots className='text-xl' /></div>
                </div>
            </div>
        </div>
    )
}
