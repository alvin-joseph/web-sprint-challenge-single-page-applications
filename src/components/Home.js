import React from 'react';

import { useHistory } from 'react-router-dom';

import { homeUrl } from '../theme/theme';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;

    img {
        height: 70vh;
        object-fit: cover;
    }

    button {
        width: 15%;
        height: 5vh;
        margin-top: 3%;
        font-size: 1.5rem;
        color:${pr => pr.theme.primaryColor};

        &:hover {
            cursor:pointer;
        }
    }
`

export default function Home() {
    const history = useHistory();

    const routeToShop = () => {
        history.push('/pizza')
    }

    return (
        <Container>
            <img
            className='home-image'
            src={homeUrl}
            alt='pizza'
            />
            <div>
                <button
                onClick={routeToShop}
                className='md-button shop-button'
                id='order-pizza'
                >
                Pizza?
                </button>
            </div>
        </Container>
    )
}