import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [textColorBlack, setTextColorBlack] = useState('black');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setTextColorBlack('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-50 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 text-white'>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className='p-4 hover:text-schedule transition-all'>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block justify-end sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColorBlack}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
          }
        >
          <ul className='text-black'>
            {NAV_LINKS.map((link) => (
              <li onClick={handleNav} key={link.label} className='p-4 text-4xl hover:text-gray-500'>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            {nav && (
              <li onClick={handleNav} className='p-4 text-4xl text-schedule'>
                <Link href='https://forms.monday.com/forms/d7949df41dc3d023d3fda39951612053?r=use1'>Schedule a Meeting</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
