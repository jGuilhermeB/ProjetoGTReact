import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage'
import Layout  from '../Components/Layout'
import ProductCard from '../Components/ProductCard'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='produtos' element={<ProductListingPage />} />
                    <Route path='detalhes' element={<ProductViewPage />} />
                    {/* abaixo daqui apenas para vizualizar  */}
                     <Route path='cards' element={<ProductCard />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas