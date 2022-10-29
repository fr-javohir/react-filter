import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./Movies";
import Filter from "./Filter";
import {motion,AnimatePresence} from 'framer-motion'

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8cccae071cd2e35bf6d27e2bccb9f97c&language=en-US&page=7"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
