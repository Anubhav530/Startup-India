import { useEffect } from "react"
import "./../css/Profile.css"
import axios from "axios";
import { useState } from "react";
const Profile = ({userName}) => {

    const [imgURL ,setImgURL] = useState('blank')

    const options = {
        method: 'GET',
        url: 'https://randomuser.me/api/',
    };

    useEffect(() => {
            alert('Profile Section is Created')
            // console.log(`making call in PRofile.js for index`)
            axios.request(options).then(function (response) {
                console.log('News Section' ,response.data);
                setImgURL(response.data.results[0].picture.large)
                // console.log(imgURL)
            }).catch(function (error) {
                console.error(error);
            });
        
    }, [])

    return (
        <div className="profileContainer">
            <div className="userImg" style={{
                backgroundImage : `url(${imgURL})`
            }}></div>
            <h2>username : {userName}</h2>
        </div>
    )
}

export default Profile