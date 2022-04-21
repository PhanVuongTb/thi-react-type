import { useState } from 'react'
import toastr from 'toastr';
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ProductManage from './page/ProductManage';
import ProductAdd from './page/ProductAdd';
import ProductEdit from './page/ProductEdit';
import Signin from './page/Signin';
import Signup from './page/Signup';
import Ckeack from './page/Ckeack';
import Header from './page/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<Ckeack><ProductManage /></Ckeack>} />
            <Route path='add' element={<Ckeack><ProductAdd /></Ckeack>} />
            <Route path=':id/edit' element={<Ckeack><ProductEdit /></Ckeack>} />
          </Route>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
