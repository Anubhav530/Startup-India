import { useEffect } from "react";
import "./../css/Profile.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader";
const Profile = ({ clicked, clickedUserData }) => {
  const params = useParams();
  console.log(params);

  var [imgURL, setImgURL] = useState("");
  var [loginInfo, setLoginInfo] = useState("username");
  var [locationInfo, setLocationInfo] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [spinner ,setSpinner] = useState(true);
  const options = {
    method: "GET",
    url: "https://randomuser.me/api/",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setLoginInfo(response.data.results[0].login);
        setImgURL(response.data.results[0].picture.large);
        setLocationInfo(response.data.results[0].location);
        setUserName(
          response.data.results[0].name.first +
            " " +
            response.data.results[0].name.last
        );
        setEmail(response.data.results[0].email);
        setSpinner(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      {spinner ? (
        <Loader />
      ) : (
        <>
          <div className="row">
            <div className="col-md-12">
              <div className="user-profile profileCard card mx-auto">
                <img className="avatar" src={imgURL} />
                <div className="card-body">
                  <p className="card-title" id="fullname">
                    {userName}
                  </p>
                  <p className="card-text" id="username">
                    {params.id}
                  </p>
                  <div
                    className="description row my-4"
                    style={{ marginLeft: "8rem", fontSize: "0.9rem" }}
                  >
                    <div className="col-md-12">
                      <p className="card-text">
                        <b>Email</b>: <span id="email">{email}</span>
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p className="card-text">
                        <b>City</b>: <span id="city">{locationInfo.city}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
