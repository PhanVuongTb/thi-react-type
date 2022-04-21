import axios from 'axios';
import toastr from 'toastr';
import React, { useEffect, useState } from 'react'
import { ProductType } from '../type/Product'

type Props = {}

const ProductManage = (props: Props) => {
    const [products, setProduct] = useState<ProductType[]>([]);


    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get("http://localhost:3002/products");
            setProduct(data);
        }
        getProduct()
    }, [])

    const onXoa = (id: number) => {
        confirm("Ban co muon xoa khong?")
        axios.delete("http://localhost:3002/products/" + id)
        toastr.success("Xoa thanh cong");
    }
    return (
        <div className='container'>
            <h2>Danh sach SP</h2>
            <a href="/products/add" className="btn btn-primary">Them sp</a>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">img</th>
                        <th scope="col">price</th>
                        <th scope="col">description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, i) => {
                        return (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{item.name}</td>
                                <td><img src={item.img} alt="" height="100px" /></td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <a href={`products/${item.id}/edit`} className="btn btn-primary">sua</a>
                                    <button onClick={() => onXoa(item.id)} className="btn btn-primary">Xoa</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManage