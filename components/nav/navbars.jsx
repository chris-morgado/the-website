import Link from "next/link";

export default function MainNavBar() {
    const leftNavdata = [
        { name: "Home", link: "/" },
    ]
    
    const navData = [
		{ name: "Projects", link: "/projects" },
		{ name: "Contact", link: "/contact" },
		{ name: "Terminal", link: "/terminal" }
	];
    
    return (
        <div>
            {navData.map((item, index) => (
                <div id={`item-${index}`}>
                    <Link key={index} href={item.link}>{item.name}</Link>
                </div>
            ))}    
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