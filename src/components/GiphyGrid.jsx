import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GiphyItem from './GiphyItem';

const GiphyGrid =  ({category}) => {
    const [gifs, setGifs]=useState([]);

 //const getGifs  =  fetch(url);

 useEffect(()=>{   
    getGifs(category)
    .then(images=>setGifs(images));
  },[])
    //se ejecuta una vez


  return (
    <>
       <h2>{category}</h2>
        <hr/>
        <section>
            {
                gifs.map(gif=>{
                    return(
                        <GiphyItem key={gif.id} gif={gif}/>
                              
                    )
                })
            }
   </section>
    </>

  )
}

export default GiphyGrid