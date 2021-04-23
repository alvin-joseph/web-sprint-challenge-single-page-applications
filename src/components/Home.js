import React from 'react'

import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();

    const routeToShop = () => {
        history.push('/pizza')
    }

    return (
        <div className='home-wrapper'>
            <img
            className='home-image'
            src='https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
            alt='pizza'
            />
            <button
            onClick={routeToShop}
            className='md-button shop-button'
            >
            Pizza?
            </button>
        </div>
    )
}