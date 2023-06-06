import Link from 'next/link'
import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
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
        <div className='max-w-[1240px] m-auto flex flex-row justify-between p-3 text-white '>
            
        
                <div class='flex'>
                    <div class='flex pr-4'>
                        <Image
                        src="/pilates-with-nat-icon-128x128.png"
                        width={60}
                        height={60}
                        alt="Pilates with Nat icon logo"
                        />
                    </div>
                    
                    <div class='flex'>
                        <Link href='/'>
                            <h1 style={{color: `${textColor}`}} className= 'pt-4 text-2xl font-normal'>
                            Pilates With Nat
                            </h1>
                        </Link>
                    </div>
                </div>

            <div class='flex'>
                <ul style={{ color: `${textColor}` }} className='hidden sm:flex '>
                    <li className='p-4 hover:text-peach font-light'>
                        <Link href='/'>Home</Link>
                    </li>
                    
                    <li className='p-4 hover:text-peach font-light'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-100'>
                {nav ? (
                    <AiOutlineClose size={20} style={{color: `${textColor}`}} /> 
                ) : (
                    <AiOutlineMenu size={20} style={{color: `${textColor}`}} />
                )}
            </div>
            {/* Mobile Menu */}
            <div 
                className={
                    nav 
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-zinc-800 text-center ease-in duration-300' 
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                }
            >
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-400'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar