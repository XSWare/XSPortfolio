import React, { useState } from 'react';

interface OrderFormProps {
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

function OrderForm({ setStatus }: OrderFormProps) {
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [side, setSide] = useState('buy');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!price || !quantity) {
            alert('Price and Quantity are required.');
            return;
        }

        try {
            const order = {
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                side: side,
                price: +price,
                quantity: +quantity,
            };

            // on "send order" button press, send parameters via POST to endpoint "http://127.0.0.1:8080/place_order"
            const response = await fetch('http://127.0.0.1:8080/place_order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (response.ok) {
                setStatus('Order placed successfully!');
                // should reset control in a real application
            } else {
                const errorText = await response.text();
                console.error('Failed to place order:', response.status, errorText);
                setStatus(`Failed to place order: ${response.status} ${errorText || 'Unknown error'}`);
            }
        } catch (error) {
            if (error instanceof SyntaxError || error instanceof RangeError) {
                setStatus(`Invalid input. Price and quantity must be valid integers.`);
            } else {
                console.error('Error placing order:', error);
                setStatus(`An error occurred while placing the order. See the console for details.`);
            }
        }
    };

    return (
        <form name='orderForm' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="price">Price:</label>
                <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min="0" step="1" />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required min="0" step="1" />
            </div>
            <div>
                <label htmlFor="side">Side:</label>
                <select id="side" value={side} onChange={(e) => setSide(e.target.value)}>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </select>
            </div>
            <button type="submit">Send Order</button>
        </form>
    );
}

export default OrderForm;