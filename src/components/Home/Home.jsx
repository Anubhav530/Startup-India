import React from "react"
import { Component } from "react"
import "./home.css"
import Template from "./Template.js"
import axios from "axios"

import logo from "../../logo.svg";
import errorJson from "../../ErrorCode"

class Home extends Component {

  state = {
    data: []
  }

  options = {
    method: 'GET',
    url: 'https://tech-news3.p.rapidapi.com/venturebeat',
    headers: {
      'X-RapidAPI-Key': '51f333c930msh5494e60c5e55ac9p1456bbjsnac2eb0e26da0',
      'X-RapidAPI-Host': 'tech-news3.p.rapidapi.com'
    }
  }
  options = {
    method: 'GET',
    url: 'https://countries-states-cities-dataset.p.rapidapi.com/list-countries',
    headers: {
      'X-RapidAPI-Key': '51f333c930msh5494e60c5e55ac9p1456bbjsnac2eb0e26da0',
      'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
    }
  };
  componentDidMount() {

    // axios.request(this.options).then(response => {
    //   console.log('api called')
    //   console.log(response.data);
    //   this.setState({ data: response.data })
    // }).catch(error => {
    //   console.error(error.response);
    // });


    axios.request(this.options).then(function (response) {
      // console.log(response.data);
      this.setState({
        data : response.data
      })
    }).catch(function (error) {
      console.error(errorJson);
      this.setState({
        data : errorJson
      })
    });

  }

  render() {
    return (
      <>
        <div style={{ display: "flex", border: "2px solid black", flexWrap: "wrap", justifyContent: "space-around" }}>
          {
            this.state.data.map(item =>
              <Template>
                
              </Template>
            )
          }
        </div>
      </>
    )
  }
}

export default Home;




  // componentDidMount(){
  //   axios.request(this.options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }

  // componentDidMount(){
  //   axios.request(this.options).then( response=> {
  //     //console.log(response.data);
  //     this.setState({data:response.data})
  //   }).catch(error=> {
  //     console.error(error);
  //   });
  // }