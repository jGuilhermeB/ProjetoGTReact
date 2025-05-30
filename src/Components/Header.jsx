import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Button } from 'antd';

const searchOptions = [
  'produtos', 'tenis', 'Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma',
  'Esporte e lazer', 'Casual', 'Utilitário', 'Corrida',
  'Gênero', 'Masculino', 'Feminino', 'Unisex',
  'Novo', 'Usado'
];

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const handleSearch = (term = searchTerm) => {
    const trimmedTerm = term.trim();
    if (trimmedTerm) {
      navigate(`/produtos?search=${encodeURIComponent(trimmedTerm)}`);
      setShowOptions(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = searchOptions.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    handleSearch(option);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="max-h-screen" style={{ background: '#FFFFFF' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-30 py-6">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/logo-header.svg"
              alt="Logo"
              className="w-58 h-auto object-cover cursor-pointer"
            />
          </Link>
        </div>

        <div className="relative flex items-center w-150 bg-gray-50 rounded px-4 py-2" ref={wrapperRef}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="bg-transparent outline-none flex-1 text-sm"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (searchTerm.length > 0) setShowOptions(true);
            }}
            autoComplete="off"
          />
          <FaSearch
            className="text-gray-200 h-4 w-4 cursor-pointer hover:text-pink-600"
            onClick={() => handleSearch()}
          />

          {/* Dropdown de sugestões */}
          {showOptions && filteredOptions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b shadow-md max-h-48 overflow-auto z-50">
              {filteredOptions.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-pink-100"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 hover:underline hover:font-thin"
          >
            Cadastre-se
          </a>
          <Button
            style={{ backgroundColor: '#DB2777', color: '#fff', border: 'none' }}
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
