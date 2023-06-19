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
                setTextColor('#0E1B26');
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
            
        
                <div className='flex'>
                    <div className='flex p-2 pr-4'>
                        <Link href='/'>
                            <Image
                            
                            src="/pilates-with-nat-icon-128x128.png"
                            width={40}
                            height={40}
                            alt="Pilates with Nat icon logo"
                            />
                        </Link>
                    </div>
                    
                    <div className='flex'>
                        <Link href='/'>
                            <h1 style={{color: `${textColor}`}} className= 'pt-4 text-2xl font-normal'>
                            Pilates With Nat
                            </h1>
                        </Link>
                    </div>
                </div>

            <div className='flex'>
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
            <div onClick={handleNav} className='block sm:hidden z-10 px-2 py-4'>
                {nav ? (
                    <AiOutlineClose size={30} style={{color: `${textColor}`}} /> 
                ) : (
                    <AiOutlineMenu size={30} style={{color: `${textColor}`}} />
                )}
            </div>
            {/* Mobile Menu */}
            <div 
                className={
                    nav 
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center bg-dkblue items-center w-full h-screen bg-zinc-800 text-center ease-in duration-200' 
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center bg-dkblue items-center w-full h-screen bg-black text-center ease-in duration-300'
                }
            >
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-peach'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-peach'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar