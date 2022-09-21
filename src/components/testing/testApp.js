import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Test1 from './test1'
import Test2 from './test2'
import { useState } from 'react'


const TestApp = () => {
    var [clicked ,setClicked] = useState({})
    var clickedHandler = (e) =>{
        console.log('e -' , e)
        console.log('clickedHandler is called')
        setClicked(e)
        console.log('new clicked - ',clicked)
    }
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/test1">Test1</Link>
                        </li>
                        <li>
                            <Link to="/test2">Test2</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route
                        exact path="/">
                        <h1>
                            TestApp....
                        </h1>
                        <h3>
                            Click to route towards Test1 or Test2
                        </h3>
                    </Route>
                    <Route
                        exact path="/test1">
                        <Test1 clickedHandler={(e)=>clickedHandler(e)}/>
                    </Route>
                    <Route
                        exact path="/test2">
                        <Test2 clicked={clicked}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default TestApp