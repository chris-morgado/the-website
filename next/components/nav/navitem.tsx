import React from 'react';


interface NavItemProps {
    navItem: {
        name: string;
        link: string;
    };
}

const NavItem: React.FC<NavItemProps> = ({navItem}) => {
    return (
        <div className="nav-item">
            {navItem.name}
        </div>
    );
}

export default NavItem;
