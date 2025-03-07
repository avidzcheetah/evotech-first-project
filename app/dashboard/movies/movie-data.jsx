import { db } from "@/lib/mongodb";
import MovieTable from "./movie-table";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// Movie data server component
// server action call directly to mongodb
export default async function MovieData() {
  try {
    const moviesQuery = await db
      .collection("movies_n")
      .find({})
      .sort({ metacritic: -1 })
      .limit(50)
      .toArray();

    if (moviesQuery) {
      // Refine movies query to a array
      const refinedMovies = moviesQuery.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rated: movie.rated,
        genres: movie.genres,
        poster: movie.poster,
        imdb: movie.imdb,
      }));

      // Pass movies refined data to movies table
      // Return MovieTable
      return <MovieTable movies={refinedMovies} />;
    }
  } catch (error) {
    console.log(error);

    return (
      <div className="flex justify-center items-center h-[186.5px]">
        <p className="text-red-700 font-medium animate-pulse duration-1000">
          No Movies Available!
        </p>
      </div>
    );
  }
}
