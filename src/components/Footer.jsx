import React from 'react'

function Footer({ completedTask, totalTask }) {
    return (
        <>
            <div className='bg-[#6EACDA] w-full p-4 mt-4'>
                <span className='m-4'>Completed Task : {completedTask}</span>
                <span>Total Task : {totalTask}</span>
            </div>
        </>
    )
}

export default Footer