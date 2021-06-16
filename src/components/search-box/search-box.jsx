import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

import './search-box.styles.css';


export const SearchBox=({placeholder,handleChange})=>{
    return(
    <input 
    className='search'
    type='search' 
     placeholder={placeholder}
    onChange={handleChange}


   
   
   
    />
    );
}

