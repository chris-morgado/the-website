import React from 'react';
import NavItem from "./navitem";

// Define the type for navigation items
type NavItemData = {
    name: string;
    link: string;
};

const MainNavBar: React.FC = () => {
    const navData: NavItemData[] = [
        { name: "Experience", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Extracurriculars", link: "/" },
        { name: "Contact", link: "/" },
        { name: "Terminal", link: "/terminal" }
    ];

    return (
        <div className="navbar shadow-sm px-8 sm:px-4 xs:px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content bg-gray-900 text-lg rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navData.map((item, index) => (
                            <li key={index}><a>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {navData.map((item, index) => (
                        <li key={index}><a>{item.name}</a></li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-white text-black  border-black hover:bg-gray-300 hover:border-gray-400">
                    <svg aria-label="Email icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    Let's Connect!
                </button>
            </div>
        </div>
    );
}

const TerminalNavBar: React.FC = () => {
    const leftNavData: NavItemData[] = [
        { name: "Terminal", link: "/terminal" },
    ];

    const navData: NavItemData[] = [
        { name: "About", link: "/terminal/about" },
        { name: "Command Line", link: "/terminal/cmd" },
        { name: "Games", link: "/terminal/games" },
        { name: "Exit Terminal", link: "/" }
    ];

    return (
        <>
        </>
    );
}

export default MainNavBar;
export { TerminalNavBar };
