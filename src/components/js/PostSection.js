import { useState } from "react"
import { useEffect } from "react"
import Post from "./Post"
import "./../css/PostSection.css"
import axios from "axios"

const PostSection = (props) => {
    const [posts, setPosts] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [obj, setObj] = useState([])
    const [loader ,setLoader] = useState(true)
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
            setLoader(false)
        }).catch(function (err) {
            console.log(err)
        })
        // alert(`${posts.length} posts created in postSection`)
    }, [])

    return (
        <div className="postSection" >

            {
                (loader)
                    ?
                    <div>Loading.....</div>
                    :
                    <>
                        <ul style={{ listStyleType: "none" }}>
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
                        </ul>
                    </>
            }

        </div>
    )
}

export default PostSection