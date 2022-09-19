import { useState } from "react"
import { useEffect } from "react"
import Post from "./Post"
import "./../css/PostSection.css"
import axios from "axios"

const PostSection = () => {
    const [posts, setPosts] = useState([0 , 1, 2 ,3 ,4, 5 ,6 ,7, 8 ,9 ,10])

    // const options1 = {
    //     method : 'GET',
    //     url : 'https://ayush007-verma.github.io/JSON-API-Startup-/JSON-data.json'
    // }

    // useEffect(() => {
    //   return () => {
    //     console.log('making call in PostSection.js')
    //     axios.request(options1).then(function(res){
    //         console.log(res.data)
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    //   }
    // }, [])


    return (
        <div className="postSection" >
            <ul style={{ listStyleType: "none" }}>
                {
                    posts.map((post, index) =>
                        <Post current={post} key={index} user={
                            {
                                name: "Ayush"
                            }
                        } />
                    )
                }
            </ul>
        </div>
    )
}

export default PostSection