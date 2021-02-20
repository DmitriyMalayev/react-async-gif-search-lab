import React from 'react';

export default function GifList({gifs}) {  
    return (
        <ul>
            {gifs.map(({id, url, title}) => <li key={ id }><img src={url} alt={title} /></li>)}
        </ul>
    )
} 



//{} This synax is called Destructuring.  If you know the structure of an object you're destructuring it to pullout values from it.   gifs is an array. 
//Does img tag need a closing tag ?? 