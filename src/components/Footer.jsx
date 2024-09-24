import React from 'react'

function Footer({ completedTask, totalTask }) {
    return (
        <>
            {/* footer to track completed and total task */}
            <div className='bg-[#6EACDA] text-center p-4 mt-4'>
                <span className='m-4'>Completed Task : {completedTask}</span>
                <span className='m-4'>Total Task : {totalTask}</span>
            </div>
        </>
    )
}

export default Footer