import React from 'react';
import logo_img from './../assets/Logo4.png'

interface NavBarProps {
    logo?: ImageBitmap;
    links?: { label: string; href: string }[];
}

const NavBar: React.FC<NavBarProps> = ({
    links = [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" }
    ]
}) => {
    const navStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '#282c34',
        color: 'white'
    };

    const linkStyle: React.CSSProperties = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px'
    };

    const logoStyle: React.CSSProperties = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <nav style={navStyle}>
            <a href='#'><img src={logo_img} height={30} style={logoStyle}/></a>
            <div>
                {links.map((link, index) => (
                    <a key={index} href={link.href} style={linkStyle}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
