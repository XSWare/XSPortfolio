import React from 'react';
import { Link } from 'react-router-dom';
import logo_img from './../assets/Logo4.png';

interface NavBarProps {
    isSPA: boolean;
    logo?: string;
    portfolio_links?: { label: string; href: string }[];
    organization_links?: { label: string; href: string }[];
}

function NavBar({
    isSPA,
    logo = logo_img,
    portfolio_links = [
        { label: "Shader example", href: "/logo_shader.html" },
        { label: "Slicing game", href: "/slicing_game.html" }
    ], organization_links = [
        // { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ] }: NavBarProps) {

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
            {isSPA ?
                (<Link to={'/'}><img src={logo} height={40} style={logoStyle} /></Link>) :
                (<a href='/'><img src={logo} height={40} style={logoStyle} /></a>)
            }

            <div style={linkContainerStyle}>
                {portfolio_links.map((link, index) => (
                    <a key={index} href={link.href} style={linkStyle}>
                        {link.label}
                    </a>
                ))}
            </div>
            <div style={linkContainerStyle}>
                {organization_links.map((link, index) => (
                    isSPA ? (
                        <Link key={index} to={link.href} style={linkStyle}>
                            {link.label}
                        </Link>
                    ) : (
                        <a key={index} href={link.href} style={linkStyle} >
                            {link.label}
                        </a>
                    )
                ))}
            </div>
        </nav >
    );
};

export default NavBar;
