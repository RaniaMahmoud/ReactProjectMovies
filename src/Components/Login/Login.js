import { useState } from "react";
import "../Login/login.css"

function Login() {
    const [user, setUser] = useState({
        UserName: "",
        Password: "",
    });

    const [errors, setErrors] = useState({
        UserName: null,
        Password: null,
    });

    const check = (evt) => {
        console.log(evt.target)
        if (evt.target.id === "UserName") {
            setUser({ ...user, UserName: evt.target.value });
        } else if (evt.target.id === "inputPassword") {
            setUser({ ...user, Password: evt.target.value });
        }


        if (evt.target.id == "UserName") {
            setErrors({
                ...errors,
                UserName:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : evt.target.value.includes(' ')
                            ? "UserName Must Not Contain space"
                            : null
            });
        }

        if (evt.target.id == "inputPassword") {
            setErrors({
                ...errors,
                Password:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(evt.target.value)
                            ? null
                            : "password must has at lest 1Uppercase 1lowercase 1digit 1char and length more than 7"
            });
        }
    }

    return (
        <>
            <div className="container margincard">
                <div className="card text-center mt-5 text-white bg-dark">
                    <div className="card-body mt-5">
                        <form>
                            <div className="mb-3 row">
                                <label htmlFor="UserName" className="col-sm-2 col-form-label">UserName</label>
                                <div className="col-sm-10">
                                    <input type="UserName" className={`form-control ${(errors.UserName) ? 'border-danger' : ''}`} value={user.UserName} id="UserName"
                                        onChange={(e) => {
                                            check(e);
                                        }}
                                    />
                                </div>
                            </div>
                            <small className="text-danger">{errors.UserName}</small>

                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className={`form-control ${(errors.Password) ? 'border-danger' : ''}`} value={user.Password} id="inputPassword" onChange={(e) => {
                                        check(e);
                                    }}
                                    />
                                </div>
                            </div>
                            <small className="text-danger">{errors.Password}</small>
                            <div className="col-auto">
                                <a href="/" className="btn btn-outline-light btn-lg mb-3 mt-3">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
