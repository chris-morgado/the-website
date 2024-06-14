import Link from 'next/link';
import React from 'react';


interface NavItemProps {
    navItem: {
        name: string;
        link: string;
    };
}

const NavItem: React.FC<NavItemProps> = ({navItem}) => {
    
    return (
        <Link href={navItem.link} className="nav-item">
            <p>
                {navItem.name}
            </p>
        </Link>
    );
}

export default NavItem;
