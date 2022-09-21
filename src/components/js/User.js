import React from 'react'
import "./../css/User.css"

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const User = ({ val }) => {

  var [imgURL, setImgURL] = useState('')
  var [loginInfo, setLoginInfo] = useState('username')
  var [locationInfo, setLocationInfo] = useState('')
  const options = {
    method: 'GET',
    url: 'https://randomuser.me/api/',
  };

  useEffect(() => {
    // console.log('clicked : ', clicked)
    axios.request(options).then(function (response) {
      console.log('Activity Section ', response.data);
      setLoginInfo(response.data.results[0].login)
      setImgURL(response.data.results[0].picture.large)
      setLocationInfo(response.data.results[0].location)
      // console.log(imgURL)
    }).catch(function (error) {
      console.error(error);
    });

  }, [])

  return (
    <div className="user-container">
      {
        (imgURL === '') ?
          <div>Loading.....</div>
          :
          <>
            <div className="user-img" style={{
              backgroundImage: `url(${imgURL})`
            }}></div>
            <h2 className='user-name'>            user {val}
            </h2>
          </>
      }
    </div>
  )
}

export default User