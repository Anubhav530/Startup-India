import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Test1 = (props) => {
  const [testArray, setTestArray] = useState([
    { id: '0', num: '0000' },
    { id: '1', num: '00001' },
    { id: '2', num: '00002' },
    { id: '3', num: '00003' },
    { id: '4', num: '00004' },
    { id: '5', num: '00005' },
    { id: '6', num: '00006' },
    { id: '7', num: '00007' },
    { id: '8', num: '00008' },
  ])

  useEffect(() => {
    console.log('Test 1 is created.....')
  }, [])

  return (
    <div>
      <h1>
        Test1...
      </h1>
      <ul>
        {
          testArray.map((object, index) =>
            <li key={index}>
              <div onClick={
                () => {
                  props.clickedHandler({ object })
                }
              }>
                <Link to="/test2">
                  Go to id : {object.id}
                </Link>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Test1