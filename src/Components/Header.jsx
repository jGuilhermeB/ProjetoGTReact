import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png';
import ornamentImg from '../assets/Ornament.png';

const slides = [
    {
        title: 'Queima de estoque Nike 🔥',
        description:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        buttonText: 'Ver Ofertas',
        buttonUrl: '#',
        image: sneakerImg,
        ornament: ornamentImg,
        bgColor: '#F9F8FE',
    },
    {
        title: 'Queima de estoque Nike 🔥',
        description:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        buttonText: 'Ver Ofertas',
        buttonUrl: '#',
        image: sneakerImg,
        ornament: ornamentImg,
        bgColor: '#F9F8FE',
    },
    {
        title: 'Queima de estoque Nike 🔥',
        description:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        buttonText: 'Ver Ofertas',
        buttonUrl: '#',
        image: sneakerImg,
        ornament: ornamentImg,
        bgColor: '#F9F8FE',
    },
];

export default function Header() {
    return (
        <div className="max-h-screen" style={{ background: '#F5F5F5' }}>
            {/* Header */}
            <header className="flex items-center justify-between px-10 py-6">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">&gt;</span>
                    </div>
                    <h1 className="text-pink-700 text-2xl font-bold">Digital Store</h1>
                </div>

                <div className="flex items-center w-96 bg-gray-100 rounded px-4 py-2">
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        className="bg-transparent outline-none flex-1 text-sm"
                    />
                    <FaSearch className="text-gray-500 h-4 w-4" />
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="#"
                        className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                    >
                        Cadastre-se
                    </a>
                    <Button
                        className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded"
                        type="primary"
                    >
                        Entrar
                    </Button>
                    <div className="relative">
                        <FaCartShopping className="h-6 w-6 text-pink-600" />
                        <div className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            2
                        </div>
                    </div>
                </div>
            </header>

            {/* Navbar */}
            <nav className="flex gap-8 px-10 py-4">
                <a
                    href="#"
                    className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                >
                    Produtos
                </a>
                <a
                    href="#"
                    className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                >
                    Categorias
                </a>
                <a
                    href="#"
                    className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                >
                    Meus Pedidos
                </a>
            </nav>
            
        </div>
    );
}
