import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Carousel } from 'antd';


import { Button } from 'antd'

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pink-600 rounded-full">
            <span className="text-white text-xl font-bold">&gt;</span>
          </div>
          <h1 className="text-pink-700 text-2xl font-bold">Digital Store</h1>
        </div>

        {/* busca search */}

        <div className="flex items-center w-96 bg-gray-100 rounded px-4 py-2">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <FaSearch className="text-gray-500 h-4 w-4" />
        </div>

        {/* Buttons */}

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-600 hover:text-pink-700">
            Cadastre-se
          </a>
          <Button className="bg-pink-600 text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-pink-600 rounded px-5">
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

      <nav className="flex gap-8 px-10 py-4 border-b">
        <a href="#" className="text-gray-600 hover:text-pink-600">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-600">Produtos</a>
        <a href="#" className="text-gray-600 hover:text-pink-600">Categorias</a>
        <a href="#" className="text-gray-600 hover:text-pink-600">Meus Pedidos</a>
      </nav>

      {/* seção */}

      <section className="flex justify-between items-center px-20 py-16 bg-gray-50">
        <div className="max-w-xl">
          <p className="text-orange-500 font-semibold mb-2">
            Melhores ofertas personalizadas
          </p>
          <h2 className="text-5xl font-extrabold mb-4">
            Queima de <br /> estoque Nike <span>🔥</span>
          </h2>
          <p className="text-gray-500 mb-8">
            texto sobre a queima de estoque
          </p>
        
           <Button className=" bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded" type="primary">Ver Ofertas</Button>
        </div>

        <div className="relative">
          <img src="src/assets/Ornament.png" alt="bolinhas" className="absolute top-5 right-10 w-24 h-24" />
          <img
            src='src/assets/White-Sneakers-PNG-Clipart 2.png'
            alt="tenis"
            className="rotate-345 w-[500px]"
          />
          
</div>
          
      </section>

      {/* paginação */}
      <div className="flex justify-center gap-2 pb-6">
        <div className="w-3 h-3 bg-pink-600 rounded-full" />
        <div className="w-3 h-3 bg-gray-300 rounded-full" />
        <div className="w-3 h-3 bg-gray-300 hover:bg-pink-600 rounded-full" />
      </div>
    </div>
  );
}