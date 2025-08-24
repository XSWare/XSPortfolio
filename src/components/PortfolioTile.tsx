import { Link } from "react-router-dom";

interface PortfolioTileProps {
    title: string,
    description: string,
    image: string,
    link: string,
    isSPA: boolean
}

const PortfolioTile = ({ title, description, image, link, isSPA }: PortfolioTileProps) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "fit-content"}}>
                <h3 style={{ textAlign: "center" }}>{title}</h3>
                <div style={{ display: "flex", flexDirection: "row", width: "auto" }}>
                    <p style={{ textAlign: "left", width: "200px", margin: "0 1rem" }}>{description}</p>
                    {isSPA ?
                        (<Link to={link}><img src={image} height={200}></img></Link>) :
                        (<a href={link}><img src={image} height={200}></img></a>)
                    }
                </div>
            </div>
        </>
    );
}

export default PortfolioTile;