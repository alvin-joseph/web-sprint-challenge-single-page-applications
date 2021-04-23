import React from 'react';

import styled from 'styled-components';
import { detailsUrl, theme } from '../theme/theme'

const Details = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
    padding: 32px;
    background-color: lightblue;
    margin-bottom: 24px;

    h2 {
        margin-bottom:1%;
        font-size:1.8rem;
    }

    p{
        font-size:1.5rem;
    }

`

const DetailsContainer = styled.div`
    img {
        object-fit:cover;
        height: 50vh;
        width: 100%;
    }

    h2 {
        font-size: 2rem;
        margin: 1% 0;
    }
`

export default function OrderDetails(props) {
    const { orders } = props;
    //console.log('orders', orders);
    return (
        <DetailsContainer>
            <img src={detailsUrl} alt="pizza cooking"></img>
            <h2>Your Order Details!</h2>
        {orders.map((order) => {
            return (
              <Details key={order.id}>
                <h2>Name: {order.name}</h2>
                <br/>
                <p>Pizza Size: {order.size}</p>
                <br/>
                <p>Sauce: {order.sauce}</p>
                <br/>
                <p>Toppings: {order.toppings + " "}</p>
                <br/>
                <p>Special Instructions: {order.special || 'n/a'} </p>
              </Details>
            )
        })}
        </DetailsContainer>
    )
}