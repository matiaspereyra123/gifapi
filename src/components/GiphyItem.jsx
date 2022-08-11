//rafce
import React from 'react'

const GiphyItem = ({gif}) => {
  return (
    <article >
    <h3>{gif.title}</h3>
    <img src={gif.url} alt="" />
</article>
  )
}

export default GiphyItem