import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='produtos' element={<ProductDetails />} />
                    <Route path='product/:id' element={<ProductListing />} />
                </Route>

            </Routes>
        </BrowserRouter>

    )
}
export default Rotas 