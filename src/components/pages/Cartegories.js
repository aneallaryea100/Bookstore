/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../Cartegories.css';

const Cartegories = () => {
  return (
    <div>
      <form action="#">
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
