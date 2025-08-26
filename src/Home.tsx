import NavBar from './components/NavBar'
import PortfolioTile from './components/PortfolioTile'
import * as Constants from './Constants'
import logo_img from './assets/Logo4.png';
import mesh_slicing_img from './assets/mesh_slicing.png';
import sharder_effect_img from './assets/shader_effect.png';
import order_book_website_img from './assets/order_book_website.png';
import './Home.css'

function Home() {
    return (
        <>
            <NavBar isSPA={true} />
            <h1>Welcome to the <img alt="" style={{ height: "40px", verticalAlign: "-10px" }} src={logo_img} /> portfolio!</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <PortfolioTile title={Constants.TITLE_ORDERBOOK} description={Constants.DESCRIPTION_ORDERBOOK} image={order_book_website_img} link={Constants.LINK_ORDERBOOK} isSPA={true} />
                <PortfolioTile title={Constants.TITLE_SHADER_EFFECT} description={Constants.DESCRIPTION_SHADER_EFFECT} image={sharder_effect_img} link={Constants.LINK_SHADER_EFFECT} isSPA={false} />
                <PortfolioTile title={Constants.TITLE_MESH_SLICING} description={Constants.DESCRIPTION_MESH_SLICING} image={mesh_slicing_img} link={Constants.LINK_MESH_SLICING} isSPA={false} />
            </div>
            <p style={{ marginTop: "40px" }}>This website is currently being built, so some things may be missing or not work, but feel free to check out what is already there!<br />
                The source code for this website can be found at <a href='https://github.com/XSWare/XSPortfolio'>https://github.com/XSWare/XSPortfolio</a>.</p>
        </>
    )
}

export default Home
