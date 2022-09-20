import userEvent from "@testing-library/user-event";
import "./../css/Post.css"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ current }) => {

    const [userName, setUserName] = useState('NAman')
    const [userImgLink, setuserImgLink] = useState(`https://randomuser.me/api/portraits/men/${current}.jpg`)
    const [loginUserName, setLoginUserName] = useState('username')
    const [postImgLink, setPostImgLink] = useState('https://pub-cdn.apitemplate.io/2022/09/dbe18a5f-d5a8-4716-807e-55b949897488.jpeg')

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://randomuser.me/api/',

    };

    useEffect(() => {
        // alert(`Post ${current} Section is Created`)
        console.log(`making call in Post.js for ${current} index`)
        axios.request(options).then(function (response) {
            setUserName(response.data.results[0].name.first + ' ' + response.data.results[0].name.last)
            // console.log(userName);
            setuserImgLink(response.data.results[0].picture.thumbnail)
            // console.log(userImgLink);
            setLoginUserName(response.data.results[0].login.username)
            // console.log(loginUserName);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="postContainer">
            <div className="userCredentials">
                <div className="userImage"
                    style={{
                        backgroundImage: `url(${userImgLink})`
                    }}>
                </div>
                {/* <h4>{userName}</h4> */}

                <h4 className="userName">
                    <Link to="/profile" username={userName}>
                        {loginUserName}
                    </Link>
                </h4>
            </div>
            <div className="postImage" style={{
                backgroundImage: `url(${postImgLink})`
            }}></div>
            <h2 className="postTitle">CreditCardTracker {current}</h2>
            <h4 className="postContent">A company that provides an API that allows users to integrate and track their credit cards</h4>
            <div className="buttons">
                <button type="submit" className="btn btn-outline-primary btn-lg btn-block">
                    <i className="fa fa-thumbs-up"></i>
                    <i className="fa fa-heart"></i>
                    Like
                </button>
                <button type="submit" className="btn btn-outline-primary btn-lg btn-block">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i>
                    Reach Out
                </button>
            </div>
        </div>
    )
}

export default Post;