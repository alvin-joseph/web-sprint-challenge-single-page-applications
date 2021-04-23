import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import * as yup from 'yup';

//importing components
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import OrderDetails from "./components/OrderDetails";

//importing schema
import schema from './validation/formSchema'

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
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  //state
  const [orders, setOrders] = useState(initialOrders)          
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    //posting new order to api
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      //console.log(res.data)
      setOrders([...orders, res.data])
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors,[name]: "",});
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0],
        });
      });

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
      toppings: ['pepperoni', 'sausage', 'bacon', 'extraCheese']
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
        <div className="nav-link1">
          <Link to='/'>Home</Link>
        </div>
        <div className="nav-link2">
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>
      
      {/* Building switch with routes to components */}
      <Switch>
        <Route path='/pizza/details'> 
          <OrderDetails orders={orders}/>
        </Route>
        <Route path='/pizza'>
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
