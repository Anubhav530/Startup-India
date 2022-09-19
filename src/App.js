import React, { Component } from 'react'
import Header from './components/js/Header'
import PostSection from './components/js/PostSection'
import News from './components/js/News'
import Profile from './components/js/Profile'
import NewPost from './components/js/NewPost'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Activity from './components/js/Activity'

class App extends Component {
    render() {
        return (
            <div className='parentContainer'>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return (
                                    <>
                                        <PostSection blur={false}/>
                                    </>
                                )
                            }}>
                        </Route>
                        <Route
                            exact
                            path="/news"
                            render={() => {
                                return (
                                    <>
                                        <News />
                                    </>
                                )
                            }}>
                        </Route>

                        <Route
                            exact
                            path="/new-post"
                            render={() => {
                                return (
                                    <>
                                        <PostSection blur={true}/>
                                        <NewPost/>
                                    </>
                                )
                            }}
                        ></Route>
                        <Route
                            exact
                            path="/activity"
                            render={() => {
                                return (
                                    <>
                                        <Activity/>
                                    </>
                                )
                            }}
                        ></Route>
                        <Route
                            exact
                            path="/profile"
                            render={() => {
                                return (
                                    <>
                                        <Profile/>
                                    </>
                                )
                            }}
                        ></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App