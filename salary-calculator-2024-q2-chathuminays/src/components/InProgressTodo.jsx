import React from 'react';
import in_progress from '../assets/in-progress.svg';

const InProgressTodo = ({ todo, priority, createdBy, date }) => {

 let priorityClass = '';

 switch (priority) {
     case 'HIGH':
         priorityClass = 'bg-bg_red text-text_red';
         break;
     case 'MEDIUM':
         priorityClass = 'bg-bg_yellow text-text_yellow';
         break;
     case 'LOW':
         priorityClass = 'bg-bg_blue text-text_blue';
         break;
  }

  return (
    <>
        <div className='min-h-12 bg-white border-b border-stroke px-3 py-2 xs:hidden md:grid items-center grid-cols-9 md:text-sm xl:text-xs 2xl:text-sm'>
            <div className='col-span-1 relative inline-block group ml-3'>
                <img src={in_progress} alt="" className='cursor-pointer'/>
                <div className="absolute -left-6 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white border border-[#EAECF0] rounded-full transition-opacity duration-300 ease-in-out">
                    <span className="text-text_yellow text-center text-xs p-1 m-1 rounded-full bg-bg_yellow">In Progress</span>
                </div>
            </div>
            <div className='col-span-4'>
                <p className=''>{todo}</p>
                <button className='text-xs text-text_pink font-medium'>
                    Mark as done
                </button>
            </div>
            <div className='col-span-2 ml-2'>
                <p>{createdBy}</p>
            </div>
            <div className={`col-span-1 text-center ${priorityClass} md:py-2 xl:py-1 2xl:py-2 flex items-center justify-center xl:text-[10px] md:text-xs 2xl:text-xs rounded-full`}>
                <p>{priority}</p>
            </div>
            <div className='col-span-1 text-text_grey ml-5'>
                <p>{date}</p>
            </div>
        </div>

        <div className='min-h-12 bg-white border-b border-stroke px-3 py-2 xs:grid md:hidden items-center'>
            <div className='flex items-center gap-5'>
                <img src={in_progress} alt="" className='cursor-pointer'/>
                <div>
                    <p className=''>{todo}</p>
                </div>
            </div>
            <div className='flex items-center justify-between pl-10 pr-3 mt-2 font-medium'>
                <button className='text-text_pink'>
                    Mark as done
                </button>
                <p>{createdBy}</p>
            </div>
            <div className='flex items-center justify-between pl-10 pr-3 mt-2'>
                <div className={`text-sm text-center ${priorityClass} px-2 py-1 flex items-center justify-center rounded-full`}>
                    <p>{priority}</p>
                </div>
                <p className='text-text_grey'>{date}</p>
            </div>
        </div>
    </>
  )
}

export default InProgressTodo;