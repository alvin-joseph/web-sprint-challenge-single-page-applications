import React from 'react';

import { useParams, useHistory } from "react-router-dom";

export default function OrderForm(props) {
    const {} = useParams();

    const { values, change, submit, disabled, errors } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        routeToDetails();
    }

    const history = useHistory()
    const routeToDetails = () => {
        history.push('/pizza/details')
    }

    return (
        <form className='form container' onSubmit={onSubmit} id='pizza-form'>
            <div className='form-container'>
                <div className="header">
                    <h1>Alvin's Pizzaria!</h1>
                    <img src="" alt="pizza"/>
                </div>
                <div className="name">
                    <h4>Build Your Own Pizza!</h4>
                    <label>Please enter your name&nbsp;
                        <input 
                        type="text"
                        id='name-input'
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        placeholder="insert name here.."
                        />
                        <div>{errors.name}</div>
                    </label>
                </div>
                
                <div className="label">
                    <h3>Please choose a Size</h3>
                    <h4>Required</h4>
                    <div>{errors.size}</div>
                </div>
  
                <label>Size
                    <select id='size-dropdown' value={values.size} name="size" onChange={onChange}>
                        <option value=''>-- Please Choose a Size --</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>

                <div className="label">
                    <h3>Please Choose a Sauce</h3>
                    <h4>Required</h4>
                    <div>{errors.sauce}</div>
                </div>

                <div className="radio">
                    <label>Red Sauce
                        <input 
                        type='radio'
                        name='sauce'
                        value='red'
                        checked={values.sauce === 'red'}
                        onChange={onChange}
                        />
                    </label>
                    <label>BBQ
                        <input 
                        type='radio'
                        name='sauce'
                        value='bbq'
                        checked={values.sauce === 'bbq'}
                        onChange={onChange}
                        />
                    </label>
                    <label>Ranch
                        <input 
                        type='radio'
                        name='sauce'
                        value='ranch'
                        checked={values.sauce === 'ranch'}
                        onChange={onChange}
                        />
                    </label>
                    <label>No Sauce
                        <input 
                        type='radio'
                        name='sauce'
                        value='nosauce'
                        checked={values.sauce === 'nosauce'}
                        onChange={onChange}
                        />
                    </label>
                </div>

                <div className="label">
                    <h3>Add Toppings</h3>
                    <h4>Choose up to 4</h4>
                </div>

                <div className="toppings">
                    <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                    </label>

                    <label>Sausage
                    <input 
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                    </label>

                    <label>Bacon
                    <input 
                    type='checkbox'
                    name='bacon'
                    checked={values.bacon}
                    onChange={onChange}
                    />
                    </label>

                    <label>Extra Cheese
                    <input 
                    type='checkbox'
                    name='extraCheese'
                    checked={values.extraCheese}
                    onChange={onChange}
                    />
                    </label>
                </div>

                <div className="label">
                    <h3>Special Instructions</h3>
                    <h4>Required</h4>
                </div>

                <div className="special">
                    <label>Anything else?
                        <input
                        id='special-text'
                        type="text"
                        value={values.special}
                        onChange={onChange}
                        name="special"
                        placeholder="Anything esle you would like to add?"
                        />
                    </label>
                </div>

                <div className='submit'>
                    <button 
                        id='order-button' 
                        disabled={disabled}
                    >
                        Add to Order
                    </button> 
                </div>
                
            </div>
        </form>
    )
}