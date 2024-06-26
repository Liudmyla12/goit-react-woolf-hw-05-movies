import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import EditorList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/tmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    // Перевірка на порожній рядок
    if (query.trim() !== '') {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        if (movieName) {
          const movies = await fetchSearchByKeyword(movieName);
          setSearchFilms(movies);
          setNoMoviesText(movies.length === 0);
        } else {
          setSearchFilms([]);
          setNoMoviesText(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <main>
      <Form searchMovies={updateQueryString} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There are no movies with this request. Please, try again...</p>
      )}
      {searchFilms.length > 0 && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
