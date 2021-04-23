import React from 'react';

import { useParams, Route, useRouteMatch } from "react-router-dom";

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
    }

    return (
        <form className='form container' onSubmit={onSubmit} id='pizza-form'>
            <div className='form-container'>
                <div className="header">
                    <h1>Alvin's Pizzaria!</h1>
                    <img src="" alt="pizza"/>
                </div>
                {/* <div className='errors'> */}
                    {/* validation errors */}
                    {/* {errors.name.length > 0 ? <div>{errors.name}</div> : null}
                    <div>{errors.role}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div> */}
                
                <label>Please enter your name&nbsp;
                    <input 
                    type="text"
                    id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    placeholder="insert name here.."
                    />
                </label>
                <div className="size-label">
                    <h3>Please choose a Size</h3>
                    <h4>Required</h4>
                </div>
  
                <label>Size
                    <select id='size-dropdown' value={values.size} name="size" onChange={onChange}>
                        <option value=''>-- Please Choose a Size --</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>

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

                <label>Email
                    <input
                    type="email"
                    value={values.email} //setup in app.js and passed down
                    onChange={onChange}
                    name="email"
                    placeholder="insert email here.."
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    />
                </label>

                <label>Password
                    <input
                    type="password"
                    value={values.password} //setup in app.js and passed down
                    onChange={onChange}
                    name="password"
                    placeholder="Password (8 characters min)"
                    minlength="8" required
                    />
                </label>

                <label>Terms of Service
                    <input 
                    type='checkbox'
                    name='terms'
                    checked={values.terms} //this will evaluate to true or false itself
                    onChange={onChange}
                    />
                </label>

                <div className='submit'>
                    <button disabled={disabled}>submit</button> 
                </div>
                
            </div>
        </form>
    )
}