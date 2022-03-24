import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {

    // const categories=[
    //     'One Punch',
    //     'Samurai X',
    //     'Dragon Ball'
    // ]

    const [categories, setCategories] = useState(['One Punch'])
    // const handle = () =>{
    //     setCategories([...categories, 'HunterXHunter'])
    //     //setCategories(cats => [...cats, 'HunterXHunter']) //TAMBIEN SE PUEDE ASÍ
    // }
    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        
        {/* <button onClick={handle}>Agregar</button> */}

        <ol>
            {
                categories.map(category =>(
                    //return <li key={category}>{category}</li>
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ))
            }
        </ol>
    </>
    )
}

export default GifExpertApp