import React from 'react'
import './DataCard.css'


function DataCard({title, tags}){


    return(
        <div className = 'card' title = {title} tags = {tags}> 

            <h2 className='card-title'>{title}</h2>

            <p className='card-text'>Tags: {tags}</p>
        </div>
    )
}

export default DataCard