import '../css/Header.css'

import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="navContainer">
            <nav className="navbar navbar-expand-lg  navbar-light">
                <div className="container-fluid  main-div">
                    <Link className="navbar-brand title text-white" to="/">
                        Startup-India
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navList">
                            <li className="nav-item navListItems">
                                <Link className="nav-link text-white  " to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item navListItems">
                                <Link className="nav-link text-white  " to="/news">
                                    News
                                </Link>
                            </li>
                            <li className="nav-item navListItems">
                                <Link className="nav-link text-white " to="/new-post">
                                    New Post
                                </Link>
                            </li>
                            <li className="nav-item navListItems">
                                <Link className="nav-link text-white " to="/activity">
                                    Activity
                                </Link>
                            </li>
                            <li className="nav-item navListItems">
                                <Link className="nav-link text-white " to="/profile">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        <button type="submit" className="btn btn-success">
                            <Link className="text-white" to="/register">
                                Sign Up
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header