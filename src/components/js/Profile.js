import { useEffect } from "react"
import "./../css/Profile.css"
import axios from "axios";
import { useState } from "react";
const Profile = ({ clicked, clickedUserData }) => {

    var [imgURL, setImgURL] = useState('')
    var [loginInfo, setLoginInfo] = useState('username')
    var [locationInfo, setLocationInfo] = useState('')
    const options = {
        method: 'GET',
        url: 'https://randomuser.me/api/',
    };

    useEffect(() => {
        // alert('Profile Section is Created')
        // console.log(`making call in PRofile.js for index`)`
        console.log('clicked : ', clicked)
        axios.request(options).then(function (response) {
            console.log('News Section ', response.data);
            setLoginInfo(response.data.results[0].login)
            setImgURL(response.data.results[0].picture.large)
            setLocationInfo(response.data.results[0].location)
            // console.log(imgURL)
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return (


        <div className="profileContainer">

            {
                (imgURL === '') ?
                    <div>Loading.....</div>
                    :
                    <>
                        <div className="userImg" style={{
                            backgroundImage: `url(${imgURL})`
                        }}></div>
                        <div className="userInfo">
                            <h2 >username : {loginInfo.username}</h2>
                            <h3> {locationInfo.city} , {locationInfo.country}</h3>
                        </div>

                        {/* <div className="userImg" style={{}}>
                            {console.log('clickedUserData - ' ,clickedUserData)}
                        </div>
                        <div className="userInfo"> */}
                            {/* <h2 >username : {clickedUserData.location.username}</h2> */}
                            {/* <h3> {locationInfo.city} , {clickedUserData.location.country}</h3> */}
                        {/* </div> */}


                    </>
            }
        </div>


    )
}

export default Profile