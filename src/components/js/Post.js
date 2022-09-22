import userEvent from "@testing-library/user-event";
import "./../css/Post.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ current, clickedHandler }) => {
    const [userData, setUserData] = useState({});
    const [userName, setUserName] = useState("");
    const [userImgLink, setuserImgLink] = useState(
        `https://randomuser.me/api/portraits/men/${current}.jpg`
    );
    const [loginUserName, setLoginUserName] = useState("username");
    const [postImgLink, setPostImgLink] = useState(
        "https://pub-cdn.apitemplate.io/2022/09/dbe18a5f-d5a8-4716-807e-55b949897488.jpeg"
    );

    const axios = require("axios");

    const options = {
        method: "GET",
        url: "https://randomuser.me/api/",
    };

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                setUserName(
                    response.data.results[0].name.first +
                    " " +
                    response.data.results[0].name.last
                );
                setuserImgLink(response.data.results[0].picture.large);
                setLoginUserName(response.data.results[0].login.username);
                setUserData(response.data.results[0]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className="col-md-4">
                <div className="card m-2" style={{ boxShadow: "2px 2px 2px 2px #e8e8e8" }}>
                    <img
                        className="card-img-top"
                        src={userImgLink}
                        alt="Card image cap"
                        style={{ height: "250px" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{userName}</h5>
                        <p className="card-text">
                            A company that provides an API that allows users to integrate
                            and track their credit cards.
                        </p>
                        <h4
                            className="userName"
                            onClick={() => {
                                clickedHandler(userData);
                            }}
                        >
                            <Link to={`/profile/${loginUserName}`} className="btn btn-primary">
                                Go to Profile
                            </Link>
                        </h4>

                        <div className="row">
                            <div className="col-md-6">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-sm w-100"
                                >
                                    <i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>
                                    Like
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-sm w-100"
                                >
                                    <i class="fa fa-handshake-o mr-1" aria-hidden="true"></i>
                                    Reach Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Post;
