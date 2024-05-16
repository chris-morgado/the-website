import Link from "next/link";

export default function NavItems() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" }
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