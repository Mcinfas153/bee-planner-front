import React from 'react'
import CreditCard from './CreditCard'
import TransactionCard from './TransactionCard'
import LogedUser from './LogedUser'

export default function () {
    return (
        <div>
            <LogedUser />
            <div className='my-5'>
                <CreditCard />
            </div>
            <div className='p-3 bg-white rounded-lg my-5'>
                <div className='flex flex-col gap-1'>
                    <p className='text-green-700 font-black tracking-wide text-xl text-center'> 1,800 د.إ</p>
                    <p className='text-gray-800 text-xs text-center'>This Month Profit</p>
                </div>
                <div className='flex justify-between my-3'>
                    <p className='text-md font-bold'>Recent Activity</p>
                    <a className='text-sm text-red-500 font-medium underline cursor-pointer'>View All</a>
                </div>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </div>
        </div>
    )
}
