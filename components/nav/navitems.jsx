import Link from "next/link";

export default function NavItems() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
        { name: "Terminal", link: "/terminal" }
    ];
    
    return (
        <div className="flex">
            {navItems.forEach(item => {
                return (
                    <Link href={item.link}>{item.name} </Link>
                );
            })}
        </div>
    );
}