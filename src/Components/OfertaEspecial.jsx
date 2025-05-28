import ellipseImg from '../assets/Ellipse 11.png';
import airJordanImg from '../assets/Layer.svg';

function OfertaEspecial() {
  return (
    <div className="bg-white w-full h-[553px] flex flex-col md:flex-row items-center justify-between">
      {/* Imagem do tênis com fundo redondo */}
      
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={ellipseImg}
            alt="Fundo redondo"
            className="absolute w-72 h-72 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <img
            src={airJordanImg}
            alt="Air Jordan"
            className="relative z-10 max-w-xs md:max-w-md w-full"
          />
        </div>
      </div>

      {/* Texto e botão */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-pink-600 font-semibold mb-2">Oferta especial</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Air Jordan edição de colecionador
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">
          Ver Oferta
        </button>
      </div>
    </div>
  );
}
export default OfertaEspecial;