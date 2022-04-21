import axios from 'axios';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toastr from 'toastr';
import { ProductType } from '../type/Product';
type Props = {}
type Input = {
    name: string,
    img: string,
    price: number,
    description: string,
}

const ProductEdit = (props: Props) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Input>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get("http://localhost:3002/products/" + id);
            reset(data);
        }
        getProduct()
    }, [])

    const onSubmit: SubmitHandler<Input> = (data: ProductType) => {
        axios.put("http://localhost:3002/products/" + data.id, data);
        toastr.success("Sua thanh cong");
        navigate("/products");
    }
    return (
        <div>
            <div className='container'>
                <h2>Sua SP</h2>
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
        </div>
    )
}

export default ProductEdit