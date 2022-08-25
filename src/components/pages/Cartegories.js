/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import '../Cartegories.css';

const Cartegories = () => {
  const check = useSelector((state) => state.cartegories);
  const dispatch = useDispatch();

  const checkHandler = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };

  return (
    <div>
      <h1>{check}</h1>
      <form onSubmit={checkHandler}>
        <label htmlFor="cartegory">Choose a cartegory:</label>
        <select name="cartegory" id="cartegory" className="cartegory">
          <option value="fiction">fiction</option>
          <option value="magna">Magna</option>
          <option value="discoveries">Discoveries</option>
          <option value="nonFiction">Non-Fiction</option>
        </select>
        <button type="submit">
          check status
        </button>
      </form>
    </div>
  );
};

export default Cartegories;
