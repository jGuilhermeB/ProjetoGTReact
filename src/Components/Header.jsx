<<<<<<< HEAD
import { ShoppingCart, Search } from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
=======
import React, { useState } from 'react'
import { Logo } from './Logo'
import { SearchField } from './SearchField'
import { Sing } from './Sing'
import { Cart } from './Cart'
import { Navigator } from './Navigator'

const Header = () => {

  const [searchInput, setSearchInput] = useState('')
  return (
    <header className='bg-white'>
      <div className='w-[86%] mx-auto'>
        <div className="flex justify-between w-full gap-4 items-center">
          <Logo/>
          <SearchField searchInput={searchInput} setSearchInput={setSearchInput}/>
          <Sing/>
          <Cart/>
        </div>
        <Navigator/>
      </div>

    </header>
  )
}
>>>>>>> 9c4cbb7667ab2bcb417b0187d7f762a3f41251a1

      <div className="flex items-center gap-3">
        <img src="/logo-header.svg" alt="Logo Header" className="w-10 h-10">
        </img>
      </div>

      <div className="flex-1 mx-6">
        <div className="relative w-full max-w-lg">
          <input type="text" 
            placeholder="Pesquisar produto..." 
            className="w-full rounded-full border border-gray-200 py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <nav className="flex gap-6 text-sm text-gray-700 items-center">
        <a href="#" className="text-pink-700 font-medium border-b-2 border-pink-700">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Categorias</a>
        <a href="#">Meus Pedidos</a>
      </nav> 

      <div className="flex items-center gap-4 ml-6">
        <a href="#" className="text-sm underline">Cadastre-se</a>
        <button className="bg-pink-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-pink-700">
          Entrar
        </button>
        <div className="relative">
          <ShoppingCart className="text-pink-700" />
          <span className="absolute -top-2 -right-2 bg-pink-700 text-white text-xs rounded-full px-1.5">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
