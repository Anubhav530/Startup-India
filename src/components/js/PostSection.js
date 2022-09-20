import { useState } from "react"
import { useEffect } from "react"
import Post from "./Post"
import "./../css/PostSection.css"
import axios from "axios"

const PostSection = () => {
    const [posts, setPosts] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [obj, setObj] = useState([])


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
        }).catch(function (err) {
            console.log(err)
        })
        // alert(`${posts.length} posts created in postSection`)
    }, [])

    return (
        <div className="postSection" >
            {/* {
                // console.log(obj.itemListElement === undefined)
                console.log("check : ", obj.itemListElement)
            }

            {(obj.itemListElement === undefined) ?

                <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, delectus.
                </h1>
                :
                setObj(obj.itemListElement)
            }
            {
                console.log('obj : ', obj, typeof (obj))
            } */}
            <ul style={{ listStyleType: "none" }}>
                {
                    posts.map((post, index) =>
                        <Post current={post} key={index}
                        />
                    )
                }
            </ul>
        </div>
    )
}

export default PostSection