import React from 'react';

import { useParams, useHistory } from "react-router-dom";

import styled from 'styled-components';
import { formUrl } from '../theme/theme'

//style
const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;

    h2 {
        color:${pr => pr.theme.primaryColor};
        font-size:2.5rem;
        margin-bottom:1%;
    }

    img {
        object-fit:cover;
        height: 50vh;
        width: 100%;
    }

    input, select, button {
        margin: 3% 0;
        font-family: 'Amaranth', sans-serif;
        font-size: 1rem;
    }

    button {
        padding:.5%;
    }
`

const Divider = styled.div`
    background-color:${pr => pr.theme.gray};
    padding:2%;

    h3, h4 {
        font-size:1.5rem;
    }
`

const Errors = styled.div`
    color:${pr => pr.theme.errorColor};
    margin-top:1%;
`

const Dropdown = styled.div`
    select {
        width:12%;
    }
`

const Special = styled.div`
    input {
        width:15%;
    }
`

const Radio = styled.div`
    input {
        margin:2%;
    }
`

const Checkbox = styled.div`
    input {
        margin:2%;
    }
`

const Name = styled.div`
    h3 {
        font-size:1.8rem;
        margin-top:1%;
    }

    input {
        width:15%;
    }
`
//end style


export default function OrderForm(props) {
    const {} = useParams();

    const { values, change, submit, disabled, errors } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const history = useHistory()
    const routeToDetails = () => {
        history.push('/pizza/details')
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        routeToDetails();
    }

    return (
        <form className='form container' onSubmit={onSubmit} id="pizza-form">
            <FormContainer>
                <div className="header">
                    <h2>Alvin's Pizzaria!</h2>
                    <img src={formUrl} alt="pizza"/>
                </div>
                <Name>
                    <h3>Build Your Own Pizza!</h3>
                    <label>Please enter your name&nbsp;
                        <input 
                        type="text"
                        id="name-input"
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        placeholder="insert name here.."
                        />
                        <Errors>{errors.name}</Errors>
                    </label>
                </Name>
                
                <Divider>
                    <h3>Please choose a Size</h3>
                    <h4>Required</h4>
                    <Errors>{errors.size}</Errors>
                </Divider>

                <Dropdown>
                    <label>Size
                        <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                            <option value=''>-- Please Choose a Size --</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                    </label>
                </Dropdown>

                <Divider>
                    <h3>Please Choose a Sauce</h3>
                    <h4>Required</h4>
                    {/* <Errors>{errors.sauce}</Errors> */}
                </Divider>

                <Radio>
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
                </Radio>

                <Divider>
                    <h3>Add Toppings</h3>
                    <h4>Choose up to 4</h4>
                </Divider>

                <Checkbox>
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
                </Checkbox>

                <Divider>
                    <h3>Special Instructions</h3>
                </Divider>

                <Special>
                    <label>Anything else?
                        <input
                        id="special-text"
                        type="text"
                        value={values.special}
                        onChange={onChange}
                        name="special"
                        placeholder="Anything esle you would like to add?"
                        />
                    </label>
                </Special>

                <div className='submit'>
                    <button 
                        id="order-button"
                        disabled={disabled}
                    >
                        Add to Order
                    </button> 
                </div>
                
            </FormContainer>
        </form>
    )
}