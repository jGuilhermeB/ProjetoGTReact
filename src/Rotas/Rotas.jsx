import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage'
import Layout  from '../Components/Layout'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='produtos' element={<ProductViewPage />} />
                    <Route path='product' element={<ProductListingPage />} />
                </Route>

            </Routes>
        </BrowserRouter>

    )
}
export default Rotas 