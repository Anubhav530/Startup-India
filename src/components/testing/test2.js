import React from 'react'
import { useEffect } from 'react'
const Test2 = (props) => {
    useEffect(() => {
        console.log('test2 is created.....')
        console.log('props - ',props)
    }, [])

    return (
        <div>
            <h1>Test 2....</h1>

            <h4>Recieved ID - {props.clicked.object.id}</h4>
            <h4>Recieved number - {props.clicked.object.num}</h4>

        </div>
    )
}

export default Test2