import axios from 'axios'
import React from 'react'
import toastr from 'toastr';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserType } from '../type/user'

type Props = {}
type Input = {
  email: string,
  password: string
}

const Signup = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Input>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Input> = (data: UserType) => {
    axios.post("http://localhost:3002/signup", data);
    toastr.success("dang ky thanh cong");
    navigate("/signin");
  }
  return (
    <div>
      <div className='container'>
        <h2>Dang ky</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <label className="form-label">email</label>
              <input type="email" className="form-control" {...register("email", { required: true })} />
              {errors.email && <div className="form-text">Khong de trong, nhap tren 5 ky tu</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">password</label>
              <input type="password" className="form-control" {...register("password", { required: true })} />
              {errors.password && <div className="form-text">Khong de trong</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup