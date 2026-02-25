import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => {
        const posterSrc = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null;

        return (
          <li key={movie.id}>
            <div className={css.card} onClick={() => onSelect(movie)}>
              {posterSrc ? (
                <img
                  className={css.image}
                  src={posterSrc}
                  alt={movie.title}
                  loading="lazy"
                />
              ) : null}

              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}