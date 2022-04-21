import React from 'react'
import toastr from 'toastr';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
    const { handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler = () => {
        localStorage.removeItem("user")
        toastr.success("dang xuat thanh cong");
        navigate("/");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {localStorage.getItem("user") ?
                                <form action="" onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex' }}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/products">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link">Loguot</button>
                                    </li>
                                </form>
                                :
                                <div style={{ display: 'flex' }}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signin">Signin</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signup">Signup</a>
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header