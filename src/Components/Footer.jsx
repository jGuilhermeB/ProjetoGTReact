import logo from "../assets/logo.svg"

export const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] w-full mt-70 p-3">
      <nav className="p-10">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 text-white">
          
          <div className="max-w-sm">
            <img className="mb-4" src={logo} alt="Logo" />
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <div className="flex gap-2 mt-2">
              <i className="fa-brands fa-facebook-f p-2" style={{ color: "#ffffff" }}></i>
              <i className="fa-brands fa-instagram p-2" style={{ color: "#ffffff" }}></i>
              <i className="fa-brands fa-x-twitter p-2" style={{ color: "#ffffff" }}></i>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-2 text-xl">Informação</h2>
            <ul className="space-y-1 text-base">
              <li><a href="">Sobre Drip Store</a></li>
              <li><a href="">Segurança</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Trabalhe conosco</a></li>
              <li><a href="">Meus Pedidos</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2 text-xl">Categorias</h2>
            <ul className="space-y-2 text-base">
              <li><a href="">Camisetas</a></li>
              <li><a href="">Calças</a></li>
              <li><a href="">Bonés</a></li>
              <li><a href="">Headphones</a></li>
              <li><a href="">Tênis</a></li>
            </ul>
          </div>

          <div className="max-w-xs">
            <h2 className="font-bold mb-2 text-xl">Contato</h2>
            <p className="text-base">
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, <br />
              Fortaleza - CE, 60150-161
            </p>
            <p className="mt-2 text-base">(85) 3051-3411</p>
          </div>

        </div>
      </nav>

      <div>
        <hr className="border-t border-gray-600 my-0 mx-10" />
        <p className="text-center text-white text-sm py-5">&copy; 2022 Digital College</p>
      </div>
    </footer>
  )
}
