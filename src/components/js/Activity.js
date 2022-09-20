import React from 'react'
import "./../css/Activity.css"
import User from './User'
import { useEffect } from 'react'

const Activity = () => {

    useEffect(() => {
        alert(`Activity Section is Created`)
    }, [])
    

    const users = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 , 8 , 9 ,10]

  return (
    <div className='activityContainer'>
        <ul>
            {
                users.map((val ,index)=>
                    <User val={val} key={index}/>
                )
            }
            
        </ul>
        
        <input type="text" placeholder='type message'/>

    </div>
  )
}

export default Activity