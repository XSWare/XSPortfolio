import { useState } from 'react';
import NavBar from './components/NavBar';
import OrderForm from './components/OrderForm';
import PriceHistory from './components/PriceHistory';
import PriceLevels from './components/PriceLevels';
import "./Orderbook.css"

function OrderBook() {
    const [status, setStatus] = useState('');
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ display: 'flex', flexDirection: 'row' }} >
                <PriceHistory />
                <PriceLevels />
            </div>
            <OrderForm setStatus={setStatus} />
            <div>
                <label id="status">{status}</label>
            </div>
        </>
    );
}

export default OrderBook;