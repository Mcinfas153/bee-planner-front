import React from 'react'
import LogedUser from './LogedUser'
import CreditCard from './CreditCard'
import TransactionCard from './TransactionCard'
import { BsPlus } from 'react-icons/bs'

export default function Transactions() {
    return (
        <div>
            <LogedUser />
            <div className='my-5'>
                <CreditCard />
            </div>
            <div className='p-3 bg-white rounded-lg my-5 overflow-y-scroll h-96'>
                <div className='flex justify-between my-3'>
                    <p className='text-md font-bold'>Transactions</p>
                    <a className='cursor-pointer'><BsPlus className='text-green-700 text-2xl' /></a>
                </div>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </div>
        </div>
    )
}
