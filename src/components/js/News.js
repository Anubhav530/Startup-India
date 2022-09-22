import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./../css/News.css";
import Loader from "./loader";
const News = () => {
  var [newsData, setNewsData] = useState([]);
  const [spinner ,setSpinner] = useState(true);

  const apiKey = "b8c33865c95647b5abe59f0c527519a5";
  const options = {
    method: "GET",
    url: `https://newsapi.org/v2/top-headlines?q=general&apiKey=${apiKey}`,
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setNewsData(response.data.articles);
        setSpinner(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <>
        {spinner ? (
          <Loader />
        ) : (
          <div className="row">
            {newsData.map((news, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card m-2"
                  style={{ boxShadow: "2px 2px 2px 2px #e8e8e8" }}
                >
                  <img
                    className="card-img-top"
                    src={news.urlToImage}
                    alt="Card image cap"
                    style={{ height: "250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{news.source.name}</h5>
                    <p className="card-text">{news.description}</p>
                    <a
                      className="btn btn-primary"
                      href={news.url}
                      target="__blank"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default News;
