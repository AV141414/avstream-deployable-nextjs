// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=57153c32`);
    const data = await response.json();
    if (data.Search) {
      setSearchResults(data.Search);
    }
  };

  const handleSelectMovie = (imdbID) => {
    router.push(`/movie/${imdbID}`);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Aetherverse TV</h1>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a movie..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
        {searchResults.length > 0 && (
          <ul className={styles.searchResults}>
            {searchResults.map((movie) => (
              <li key={movie.imdbID} onClick={() => handleSelectMovie(movie.imdbID)}>
                {movie.Title} ({movie.Year})
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}