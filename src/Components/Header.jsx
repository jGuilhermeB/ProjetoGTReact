import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import sneakerImg from '../assets/White-Sneakers-PNG-Clipart 2.png';
import ornamentImg from '../assets/Ornament.png';

const slides = [
    {
        title: 'Queima de estoque Nike',
        description:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        buttonText: 'Ver Ofertas',
        buttonUrl: '#',
        image: sneakerImg,
        ornament: ornamentImg,
        bgColor: '#DB2777',
    },
    {
        title: 'Queima de estoque Nike',
        description:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        buttonText: 'Ver Ofertas',
        buttonUrl: '#',
        image: sneakerImg,
        ornament: ornamentImg,
        bgColor: '#DB2777',
    },
    {
        title: 'Queima de estoque Nike',
        description:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        buttonText: 'Ver Ofertas',
        buttonUrl: '#',
        image: sneakerImg,
        ornament: ornamentImg,
        bgColor: '#DB2777',
    },
];

export default function Header() {
    return (
        <div className="max-h-screen" style={{ background: '#FFFFFF' }}>
            {/* Header */}
            <header className="flex items-center justify-between px-30 py-6">
                <div className="flex items-center gap-2">
                      <img
                            src="public/logo-header.svg"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                </div>

                <div className="flex items-center w-220 bg-gray-50 rounded px-4 py-2">
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        className="bg-transparent outline-none flex-1 text-sm"
                    />
                    <FaSearch className="text-gray-200 h-4 w-4" />
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="#"
                        className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                    >
                        Cadastre-se
                    </a>
                    <Button style={{ backgroundColor: '#DB2777', color: '#fff', border: 'none' }}
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
            <nav className="flex gap-8 px-30 py-4">
                <Link
                    to="/"
                    className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                >
                    Home
                </Link>
                <Link
                    to="/produtos"
                    className="text-gray-600 hover:text-pink-600 hover:underline hover:font-bold"
                >
                    Produtos
                </Link>
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
