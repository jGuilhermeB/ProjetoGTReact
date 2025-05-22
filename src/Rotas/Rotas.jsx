import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage'
import Layout  from '../Components/Layout'
import ShowThumbs from '../Components/ShowThumbs'
import CustomCarousel from '../Components/Carrousel'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='produtos' element={<ProductListingPage />} />
                    <Route path='product/:id' element={<ProductViewPage />} />
                    {/* abaixo daqui apenas para vizualizar  */}
                    <Route path='st' element={<ShowThumbs />} />
                     <Route path='carosel' element={<CustomCarousel />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas