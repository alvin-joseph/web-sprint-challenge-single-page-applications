import React from 'react';

export default function OrderDetails(props) {
    const { orders } = props;
    console.log('orders', orders);
    return (
        orders.map((order, i) => {
            return (
              <div key={i} className='order container'>
                <h2>Name: {order.name}</h2>
                <br/>
                <p>Pizza Size: {order.size}</p>
                <br/>
                <p>Sauce: {order.sauce}</p>
                <br/>
                <p>Toppings: {order.toppings || 'no toppings'} </p>
                <br/>
                <p>Special Instructions: {order.special || 'n/a'} </p>
              </div>
            )
        })
    )
}