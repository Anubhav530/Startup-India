import React from "react"

class Template extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return (
            
            <div style={{backgroundColor:"lightblue",height:"300px",width:"300px",margin:"30px"}}>{this.props.title}</div>
            
        )
    }
}

export default Template