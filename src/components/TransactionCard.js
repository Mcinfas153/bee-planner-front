import React from 'react'
import { BsCapslockFill, BsPlus } from 'react-icons/bs'

export default function TransactionCard() {
    return (
        <div className='flex justify-between items-center border-b'>
            <div className=''>
                <div className='flex px-2 py-3'>
                    <div className='bg-white h-10 w-10 rounded-full border bg-green-600 flex justify-center items-center'>
                        <BsCapslockFill className='text-white text-md' />
                    </div>
                    <div className='flex flex-col items-stretch px-3'>
                        <p className='text-sm tracking-wide font-bold text-red-600'>ADCB BANK</p>
                        <p className='text-xs text-gray-500'>14th March 2022</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center px-2 py-3'>
                <BsPlus className='text-green-700 text-xl' />
                <p className='text-green-700 font-black tracking-wide text-lg'>150 د.إ</p>
            </div>
        </div>
    )
}
