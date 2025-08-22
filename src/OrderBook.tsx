import NavBar from './components/NavBar';
import PriceHistory from './components/PriceHistory';
import PriceLevels from './components/PriceLevels';
import "./Orderbook.css"

function OrderBook() {
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ display: 'flex', flexDirection: 'row' }} >
                <PriceHistory />
                <PriceLevels />
            </div>
        </>
    );
}

export default OrderBook;