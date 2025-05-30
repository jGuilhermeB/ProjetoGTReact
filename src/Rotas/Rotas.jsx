import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage'
import Layout from '../Components/Layout'
import { ProductProvider } from '../context/CardContext'



const Rotas = () => {
    return (
        <ProductProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path='produtos' element={<ProductListingPage />} />
                        <Route path='detalhes/:id' element={<ProductViewPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductProvider>
    )
}
export default Rotas