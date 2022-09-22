import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand title text-white" to="/">
                    Startup-India
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
                        <li className="nav-item navListItems mx-4">
                            <Link className="nav-link text-white  " to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item navListItems mx-4">
                            <Link className="nav-link text-white  " to="/news">
                                News
                            </Link>
                        </li>
                        <li className="nav-item navListItems mx-4">
                            <Link className="nav-link text-white " to="/new-post">
                                New Post
                            </Link>
                        </li>
                        <li className="nav-item navListItems mx-4">
                            <Link className="nav-link text-white " to="/activity">
                                Activity
                            </Link>
                        </li>
                        <li className="nav-item navListItems mx-4">
                            <Link className="nav-link text-white " to="/profile">
                                Profile
                            </Link>
                        </li>
                    </ul>
                    <button type="submit" className="btn btn-success mx-4">
                        <Link className="text-white" to="/register">
                            Sign Up
                        </Link>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header