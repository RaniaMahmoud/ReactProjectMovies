import { useState } from "react";
import "../Register/register.css";
function Register() {
    const [user, setUser] = useState({
        Email: "",
        Name: "",
        UserName: "",
        Password: "",
        ConfermPassword: ""
    });

    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null,
        UserName: null,
        Password: null,
        ConfermPassword: null
    });

    const check = (evt) => {
        console.log(evt.target)
        if (evt.target.id === "Name") {
            setUser({ ...user, Name: evt.target.value });
        } else if (evt.target.id === "Email") {
            setUser({ ...user, Email: evt.target.value });
        } else if (evt.target.id === "UserName") {
            setUser({ ...user, UserName: evt.target.value });
        } else if (evt.target.id === "inputPassword") {
            setUser({ ...user, Password: evt.target.value });
        } else if (evt.target.id === "ConfirmPass") {
            setUser({ ...user, ConfermPassword: evt.target.value });
        }

        if (evt.target.id == "Name") {
            setErrors({
                ...errors,
                nameError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : ""
            });
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
        if (evt.target.id == "Email") {
            setErrors({
                ...errors,
                emailError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : evt.target.value.includes('@') && evt.target.value.includes('.com')
                            ? null
                            : "must be in email format"
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
        if (evt.target.id == "ConfirmPass") {
            setErrors({
                ...errors,
                ConfermPassword:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : evt.target.value == user.Password
                            ? null
                            : "password must match"
            });
        }
    }

    return (
        <>
            <div className="container marginCardNew">
                <div className="card text-center mt-5 text-white bg-dark">
                    <div className="card-body mt-5">
                        <form>
                            <div className="mb-3 row">
                                <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="Name" className={`form-control ${(errors.nameError) ? 'border-danger' : ''}`} value={user.Name} id="Name" onChange={(e) => {
                                        check(e);
                                    }} />
                                </div>
                            </div>
                            <small className="text-danger">{errors.nameError}</small>

                            <div className="mb-3 row">
                                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="Email" className={`form-control ${(errors.Email) ? 'border-danger' : ''}`} value={user.Email} id="Email"
                                        onChange={(e) => {
                                            check(e);
                                        }}
                                    />
                                </div>
                            </div>
                            <small className="text-danger">{errors.emailError}</small>

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

                            <div className="mb-3 row">
                                <label htmlFor="ConfirmPass" className="col-sm-2 col-form-label">Confirm Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className={`form-control ${(errors.ConfermPassword) ? 'border-danger' : ''}`} value={user.ConfermPassword} id="ConfirmPass"
                                        onChange={(e) => {
                                            check(e);
                                        }}
                                    />
                                </div>
                            </div>
                            <small className="text-danger">{errors.ConfermPassword}</small>

                            <div className="col-auto">
                                <a href="/" className="btn btn-outline-light btn-lg mb-3 mt-3">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
