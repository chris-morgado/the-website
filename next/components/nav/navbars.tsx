import React from 'react';
import NavItem from "./navitem";

// Define the type for navigation items
type NavItemData = {
    name: string;
    link: string;
};

const MainNavBar: React.FC = () => {
    const leftNavData: NavItemData[] = [
        { name: "Home", link: "/" },
    ];
    
    const navData: NavItemData[] = [
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
        // { name: "Terminal", link: "/terminal" }
    ];
    
    return (
        <div className="outer-nav-container">
            <div className="inner-nav-container">
                {leftNavData.map((item, index) => (
                    <NavItem key={`left-${index}`} navItem={item}></NavItem>   
                ))}
                <div style={{flex: '1'}}></div>
                {navData.map((item, index) => (
                    <NavItem key={index} navItem={item}></NavItem>
                ))}    
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
