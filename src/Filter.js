import {useEffect} from 'react'
// import {motion} from 'framer-motion'

function Filter({setActiveGenre,activeGenre,popular,setFiltered}){
    console.log(popular);
    useEffect(()=>{
        if (activeGenre === 0){
            setFiltered(popular)
            return;
        }
        const filtered = popular.filter((movie)=>
            movie.genre_ids.includes(activeGenre)
        )
        setFiltered(filtered)
    },[activeGenre])
    return (
        <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ""} onClick={()=>{setActiveGenre(0)}}>All</button>
            <button className={activeGenre === 16 ? "active" : ""} onClick={()=>{setActiveGenre(16)}}>Animation</button>
            <button className={activeGenre === 12 ? "active" : ""} onClick={()=>{setActiveGenre(12)}}>Adventure</button>
        </div>
    )
}
export default Filter  