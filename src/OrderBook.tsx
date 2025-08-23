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
            <div style={{ minHeight: "450px", minWidth: "900px" }}>
                <div style={{ display: 'flex', flexDirection: 'row', height: "80vh", margin: "20px 0 0 0" }} >
                    <div style={{ width: "70%", height: "auto", maxHeight: "800px" }}>
                        <PriceHistory />
                    </div>
                    <div>
                        <div style={{ height: "70%", margin: "0 0 10px 0" }}>
                            <PriceLevels />
                        </div>
                        <div style={{ width: "80%", alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column", margin: "0 auto" }}>
                            <OrderForm setStatus={setStatus} />
                        </div>
                    </div>
                </div>
                <label id="status">{status}</label>
            </div>
        </>
    );
}

export default OrderBook;