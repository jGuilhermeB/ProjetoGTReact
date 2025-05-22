import { Link } from 'react-router-dom';
import LogoPrimary from '../../public/logo-primary.svg';
import LogoWhite from '../../public/logo-white.svg';

export const Logo = ({ background = 'white' }) => {
  const logoSrc = background === 'dark-gray' ? LogoWhite : LogoPrimary;

  return (
    <Link to={'/'} className="logo flex items-center cursor-pointer">
      <img src={logoSrc} alt="Logo" className="w-8" />
      <h1 className={`font-semibold text-4xl ml-1 text-nowrap ${background === 'dark-gray' ? 'text-white' : 'text-primary'}`}>
        Digital Store
      </h1>
    </Link>
  );
};