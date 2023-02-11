import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [textColorBlack, setTextColorBlack] = useState('black')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setTextColorBlack('#000000')
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 text-white'>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='/#about_us'>About Us</Link>
          </li>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='/#offer'>What We Offer</Link>
          </li>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='https://yuriyboot.red1realty.com/index.php'>MLS</Link>
          </li>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='/#contact'>Contact</Link>
          </li>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='/contact'>BUCH Cast</Link>
          </li>
          <li className='p-4 hover:text-schedule transition-all'>
            <Link href='/contact'>Blog</Link>
          </li>
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
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>About Us</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>What We Offer</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>MLS</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>BUCH Cast</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Blog</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl text-schedule'>
              <Link href='https://forms.monday.com/forms/d7949df41dc3d023d3fda39951612053?r=use1'>Schedule a Meeting</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
