import NavItem from "./navitem";

export default function MainNavBar() {
    const leftNavData = [
        { name: "Home", link: "/" },
    ]
    
    const navData = [
		{ name: "Projects", link: "/projects" },
		{ name: "Contact", link: "/contact" },
		{ name: "Terminal", link: "/terminal" }
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

export function TerminalNavBar() {
    const leftNavData = [
        { name: "Terminal", link: "/terminal" },
    ]
    
    const navData = [
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