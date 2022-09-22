import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./../css/News.css"
import newsData from './../json/newsData.json'
const News = () => {

    var [newsData, setNewsData] = useState([])

    const options = {
        method: 'GET',
        // url: 'https://latest-startup-news.p.rapidapi.com/news',
        url: 'https://ayush007-verma.github.io/JSON-API-Startup-/JSON-data_news.json'
    };

    useEffect(() => {
        // alert('News Section Created')
        console.log('News Section useEffect Called')
        axios.request(options).then(function (response) {
            console.log("News Section : ", response.data);
            setNewsData(response.data.splice(10))
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        < div className="newsContainer" >
            <>
                <ul>
                    {
                        newsData.map((current, i) =>
                            <li key={i}>
                                <h2>
                                    {current.title}
                                </h2>
                                <h4>
                                    <a href={current.url} target="/blank">
                                        {current.url}
                                    </a>
                                </h4>
                            </li>
                        )
                    }</ul>
            </>
        </div >

    )
}

export default News