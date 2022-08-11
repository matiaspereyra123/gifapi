
import React from 'react'
import { useState } from 'react'

import AddGiphyCategory from './AddGiphyCategory'
import GiphyGrid from './GiphyGrid'
const GiphyMainApp=()=> {
    
    const[categories,setCategories]=useState([]);
 
    const onAddCategory=(inputValue)=>{
        if(categories.includes(inputValue))return;
        setCategories([inputValue,...categories]);
    }



    return(


    <main className="container p-5" >
        <section className="mb-5 text-center">
            <h1>
                GiphyMainApp
            </h1>
        </section>
      {/*      Section AddGiphyCategory */}
        <section>

            <AddGiphyCategory onNewCategory={(inputValue)=>onAddCategory(inputValue)} />
        </section>

     
      {/*      Section GiphyGrid */}
        <section>
               
                        {
                            categories.map(category=>{
                                    return(
                                        <GiphyGrid key={category} category={category}/>
                                    )
                            })
                        }
                 
        </section>


    </main>
    
    ) 
}

export default GiphyMainApp;