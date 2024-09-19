import React from 'react'
import Cards from './Cards'
import list from "../../src/list.json"
import { Link } from 'react-router-dom'
function Course() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className='text-pink-500'>Here!</span></h1>
            <p className='mt-12 '>Lorem ipsum dolor sit,amet consectetur elit Porro assumenda? Repeliendus, iste corrupt? tempore laudantium repellendus accusamus sed architecto odio, nisi expedita quas quidem nesciunt debitis non aspernatur praesentium assumenda sint quibusdam, perspiciatis ,explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnum consequatur!</p>
            <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Course