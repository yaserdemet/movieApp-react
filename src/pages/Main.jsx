import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import {Helmet} from "react-helmet"

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);


  const myRef = useRef();


  useEffect(() => {
    myRef.current.focus();
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  // ! getMovies functionını hem ana sayfa ilk render oldugunda hemde search işlemi yapıldıgında  parametreler ile çalışacaktır.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
      // alert("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
      // alert("Please enter a text");
    }
  };
  return (
    <>

<Helmet>
        <title>Main Page</title>
        <meta name="description" content="main page films" />
      </Helmet>
      <form className="search" onSubmit={handleSubmit}>
        <input
          ref={myRef}
          type="search"
          className="search-input "
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ms-2 btn-dark" type="submit">
          Search
        </button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <div className="spinner-border text-dark m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
          // ! movieyi map edip MovieCard componentininde cardları basıyoruz.
        )}
      </div>
    </>
  );
};

export default Main;
