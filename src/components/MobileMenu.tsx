// src/components/MobileMenu.tsx
import { useState } from 'react';

// Definindo os tipos para as props com TypeScript
interface NavLink {
  href: string;
  name: string;
}

interface Props {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
        <>
        {/* Botão Hambúrguer */}
        <div className="flex md:hidden">
            <button className="bg-gray-200 items-center justify-center p-2 rounded-lg active:scale-80 transition duration-300 text-gray-500 focus:outline-none border-1 border-gray-300" 
                onClick={() => toggleMobileMenu()} type="button">
                    H
            </button>
        </div>


            {/* menu backdrop */}
            {isOpen &&
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[2000] md:hidden overflow-hidden" onClick={() => setIsOpen(false)}/>
            }

            {/* menu (mobile) */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-[3000] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                <div className="flex flex-col px-2 py-3 gap-2">
                    
                    <div className="flex md:hidden justify-end">
                        <button className="bg-gray-200 items-center justify-center p-1.5 rounded-lg active:scale-80 transition duration-300 text-gray-500 focus:outline-none border-1 border-gray-300" 
                            onClick={() => toggleMobileMenu()} type="button">
                                X
                        </button>
                    </div>

                    <span className="text-gray-500 border-b h-2 border-gray-300"></span>

                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-custom-slate-gray font-medium text-lg hover:text-custom-charcoal">
                            {link.name}
                        </a>
                    ))}

                </div>
            </div>

  
        </>
    );
}