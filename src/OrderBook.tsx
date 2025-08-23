import { useState } from 'react';
import NavBar from './components/NavBar';
import OrderForm from './components/OrderForm';
import PriceHistory from './components/PriceHistory';
import PriceLevels from './components/PriceLevels';
import "./OrderBook.css"

function OrderBook() {
    const [status, setStatus] = useState('');
    return (
        <>
            <NavBar isSPA={true} />
            <p>Example order book page, connected to a <a href='https://github.com/CaptainOachkatzl/order-book-challenge'>Rust backend server</a>.</p>
            <div className="order-book-container">
                <div className="order-book-main">
                    <div className="price-history-container">
                        <PriceHistory />
                    </div>
                    <div className="sidebar-container">
                        <div className="price-levels-container">
                            <PriceLevels />
                        </div>
                        <div className="order-form-container">
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