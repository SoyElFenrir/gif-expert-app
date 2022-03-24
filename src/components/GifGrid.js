import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from '../components/GifGridItem'
// import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])

    const {data:images, loading}=useFetchGifs(category)
    //console.log(loading)
    // useEffect(()=>{
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])

    //getGifs()

    return (
        <>
            <h3 className='animate__animated animate__bounceInLeft'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            //img={ img }
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}
