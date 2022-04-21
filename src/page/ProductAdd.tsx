import axios from 'axios'
import React from 'react'
import toastr from 'toastr';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../type/Product'

type Props = {}
type Input = {
    name: string,
    img: string,
    price: number,
    description: string,
}

const ProductAdd = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Input> = (data: ProductType) => {
        axios.post("http://localhost:3002/products/", data);
        toastr.success("them thanh cong");
        navigate("/products");
    }


    return (
        <div className='container'>
            <h2>Them SP</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" {...register("name", { required: true, minLength: 5 })} />
                        {errors.name && <div className="form-text">Khong de trong, nhap tren 5 ky tu</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">img</label>
                        <input type="text" className="form-control" {...register("img", { required: true })} />
                        {errors.img && <div className="form-text">Khong de trong</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price</label>
                        <input type="number" className="form-control" {...register("price", { required: true })} />
                        {errors.price && <div className="form-text">Khong de trong</div>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" {...register("description")} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd