export default function Headers() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-2 ms-5" href="/">Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"></a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <span className=""><a className="btn btn-outline-info" href="/login">Login</a></span>
                            <span className="me-5"><a className="btn btn-outline-info ms-3" href="/register">Registration</a></span>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}