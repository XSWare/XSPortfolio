import NavBar from './components/NavBar';

function OrderBook() {
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ padding: "1rem" }}>
                <h2>Order Book</h2>
                <p>This is the order book page.</p>
                {/* Order book component will go here */}
            </div>
        </>
    );
}

export default OrderBook;