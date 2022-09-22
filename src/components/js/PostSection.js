import { useState } from "react"
import { useEffect } from "react"
import Post from "./Post"
import "./../css/PostSection.css"
import axios from "axios";
import Loader from "./loader";

const PostSection = (props) => {
    const [posts, setPosts] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [obj, setObj] = useState([])
    const [spinner ,setSpinner] = useState(true)
    const [clickedUserData ,setClickedUserData] = useState({})

    const options1 = {
        method: 'GET',
        url: 'https://ayush007-verma.github.io/JSON-API-Startup-/JSON-data.json'
    }

    useEffect(() => {
        // alert('PostSection Section is Created')
        console.log('making call in PostSection.js')
        axios.request(options1).then(function (respone) {
            console.log(respone.data)
            setObj(respone.data)
            setSpinner(false)
        }).catch(function (err) {
            console.log(err)
        })
        // alert(`${posts.length} posts created in postSection`)
    }, [])

    return (
        <div className="container" >

            {
                (spinner)
                    ?
                    <Loader />
                    :
                    <>
                        <div className="row">
                            {
                                posts.map((post, index) => {
                                    return(
                                    <Post current={post} key={index} 
                                        clickedHandler={(e)=>{
                                            setClickedUserData(e)
                                            props.setClickedUserData(clickedUserData)
                                        }}
                                    />
                                    )
                                }
                                )
                            }
                        </div>
                    </>
            }

        </div>
    )
}

export default PostSection