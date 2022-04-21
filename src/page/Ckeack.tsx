
import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';
import toastr from 'toastr';

type Props = {
  children: JSX.Element;
}

const Ckeack = (props: Props) => {
  const id = JSON.parse(localStorage.getItem("user") as any).user.id;
  if (id == "1") {
    return props.children;
  } else {
    confirm("Ban khong phai Admin khong vao duoc quan tri")
    return <Navigate to={"/"} />
  }
}

export default Ckeack