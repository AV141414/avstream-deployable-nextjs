// pages/movie/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Movie.module.css';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const fetchMovieDetails = async () => {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=57153c32`);
    const data = await response.json();
    if (data.Title) {
      setMovieTitle(data.Title);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>{movieTitle}</h1>
        <div className={styles.iframeContainer}>
          <iframe
            src={`https://multiembed.mov/?video_id=${id}`}
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}