import React from 'react'
import { useState } from 'react';

const AddGiphyCategory = ({onNewCategory}) => {
  const[inputValue, setInputValue]=useState([''])

  const onFormSubmit =(e)=>{
      e.preventDefault();
      if(inputValue.trim().length<2)return;
     // if(categories.includes(inputValue))return;
      onNewCategory(inputValue.trim());
      setInputValue('');
  }

  const onInputChange=(e)=>{
      setInputValue(e.target.value);
  }

  return(
    <section>

      <form  onSubmit={onFormSubmit}>   
                <input 
                type="text"
                placeholder ="Ingrese la categoria a buscar"
                className="form-control"
                value ={inputValue}
              onChange={onInputChange}
                />

         </form>
         <button className='btn btn-primary mt-5'>Reset</button>
  </section>
  )

}

export default AddGiphyCategory