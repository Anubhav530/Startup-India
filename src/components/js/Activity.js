import React from 'react'
import "./../css/Activity.css"
import User from './User'
import { useEffect } from 'react'

const Activity = () => {

    useEffect(() => {
        console.log(`Activity Section is Created`)
    }, [])

    const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className='activityContainer'>

            {/* <div className='messageSection'>
                <input type="text" placeholder='type message' />
            </div> */}
            <section className='listSection'>
                <ul className='listSection'>
                {
                    users.map((val, index) =>
                        <User val={val} key={index} />
                    )
                }
                </ul>
            </section>
            <section className='messageSection'>messageSection</section>
        </div>
    )
}

export default Activity