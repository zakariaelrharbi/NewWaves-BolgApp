import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemInfo = [
    { name: "Home", type: "link" },
    { name: "Articles", type: "link" },
    { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
    { name: "Pricing", type: "link" },
    { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdownHandler = () => {
        setDropdownVisible((prevState) => !prevState);
    };

    return (
        <li className="relative group">
            {item.type === "link" ? (
                <a href="/" className="hover:text-[#007bff] transition-all duration-150">
                    {item.name}
                </a>
            ) : (
                <div className="flex flex-col items-center">
                    <button className="flex py-2 items-center hover:text-[#007bff] transition-all duration-150" onClick={toggleDropdownHandler}>
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown />
                    </button>
                    <div className={` ${dropdownVisible ? "block" : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                        <ul className="bg-dark-soft flex lg:bg-transparent text-center flex-col shadow-lg rounded-lg overflow-hidden">
                            {item.items.map((page, index) => (
                                <li key={index} className="hover:bg-dark-hard hover:text-white px-6 py-2 text-gray-500 lg:text-dark-soft">
                                    <a href="/">{page}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((prevState) => !prevState);
    };

    return (
        <section className="sticky top-0 left-0 right-0 z-50 bg-white">
            <header className="container mx-auto px-5 flex justify-between lg:justify-around py-4 items-center relative">
                <div>
                    <a href="/" className="w-16 flex items-center dark:text-[#007bff] font-bold text-3xl">New <span>W</span>aves</a>
                </div>
                <div className="lg:hidden z-50">
                    {navIsVisible ? <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} /> : <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />}
                </div>
                <div className={`${navIsVisible ? "" : "hidden"} transition-all duration- absolute top-full left-0 lg:relative lg:flex flex-col w-full lg:w-auto justify-center lg:justify-around lg:flex-row gap-x-9 items-center bg-dark-hard lg:bg-transparent py-4 lg:py-0`}>
                    <ul className="items-center gap-y-5 px-16 flex flex-col lg:flex-row gap-x-5 font-semibold text-gray-500 lg:text-dark-soft transition-all duration-300">
                        {navItemInfo.map((item, index) => <NavItem key={index} item={item} />)}
                    </ul>
                    <div className="flex justify-center mt-4 lg:mt-0 transition-all duration-300">
                        <button className="px-5 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                            Login
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;
