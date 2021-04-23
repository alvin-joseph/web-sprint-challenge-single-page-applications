import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import * as yup from 'yup';

//set initial states
const initialFormValues = {
  //text input
  name: '',
  special: '',
  //dropdown
  size: '',
  //radio buttons
  sauce: '',
  //checkboxes
  pepperoni: false,
  sausage: false,
  bacon: false,
  extraCheese: false,
  noToppings: true,
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialOrder = [];
const initialDisabled = true;

const App = () => {
  //state
  const [order, setOrder] = useState(initialOrder)          
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    //posting new order to api
    axios
    .post('https://reqres.in/api/orders')
    .then(res => {
      setOrder([...order, res.data])
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'bacon', 'extraCheese', 'noToppings']
      .filter(topping => formValues[topping])
    }

    postNewOrder(newOrder);
  }

  useEffect(() => {
    // changing status of `disabled` when `formValues` changes
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <div className="App">
      <nav>
        <h1 className='shop-header'>Lambda Eats</h1>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>
    </div>
  );
};
export default App;
