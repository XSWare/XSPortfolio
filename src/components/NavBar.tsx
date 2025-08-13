import React from 'react';
import logo_img from './../assets/Logo4.png'

interface NavBarProps {
    logo?: ImageBitmap;
    portfolio_links?: { label: string; href: string }[];
    organization_links?: { label: string; href: string }[];
}

const NavBar: React.FC<NavBarProps> = ({
    organization_links: org_links = [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" }
    ],
    portfolio_links: port_links = [
        { label: "Shader example", href: "/logo_shader.html" },
        { label: "Slicing game", href: "/slicing_game.html" }
    ]
}) => {
    const navStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white',
        color: 'white'
    };

    const linkContainerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const linkStyle: React.CSSProperties = {
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        margin: '0 10px',
    };

    const logoStyle: React.CSSProperties = {
        textDecoration: 'none',
        display: 'block'
    };

    return (
        <nav style={navStyle}>
            <a href='./index.html'><img src={logo_img} height={40} style={logoStyle} /></a>
            <div style={linkContainerStyle}>
                {port_links.map((link, index) => (
                    <a key={index} href={link.href} style={linkStyle}>
                        {link.label}
                    </a>
                ))}
            </div>
            <div style={linkContainerStyle}>
                {org_links.map((link, index) => (
                    <a key={index} href={link.href} style={linkStyle}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
